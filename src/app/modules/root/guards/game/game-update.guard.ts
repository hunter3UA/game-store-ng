import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { GameDTO } from 'src/app/modules/core/api-models/game/game.dto';
import { Role } from 'src/app/modules/core/enums/role';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
import { GameService } from 'src/app/modules/shared/services/game/game.service';
import { TokenStorageService } from 'src/app/modules/user/services/token-storage/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class GameUpdateGuard implements CanActivate {
  public key: string;
  constructor(
    private gameService: GameService,
    private tokenService: TokenStorageService,
    private router: Router,
    private errorService: ErrorHandlerService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.key = route.params['key'];
    return this.loadGame();
  }

  async loadGame() {
    if (!this.tokenService.isAuthenticated())
      this.router.navigateByUrl('/login');
    let currentGame: GameDTO;
    try {
      currentGame = await lastValueFrom(
        this.gameService.getGameByKey(this.key, false)
      );
    } catch (error) {
      this.errorService.handleError(error);
    }

    let currentUser = this.tokenService.getUser();
    if (
      (currentGame &&
        currentUser.role == Role.Publisher &&
        currentUser.PublisherName == currentGame.publisher.companyName) ||
      currentUser.role == Role.Manager ||
      currentUser.role == Role.Admin
    )
      return true;

    return this.router.navigateByUrl('/home');
  }
}
