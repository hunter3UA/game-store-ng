import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { Role } from 'src/app/modules/core/enums/role';
import { GameService } from 'src/app/modules/shared/services/game/game.service';
import { TokenStorageService } from 'src/app/modules/user/services/token-storage/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class PublisherUpdateGuard implements CanActivate {
  public name: string;
  constructor(
    private gameService: GameService,
    private tokenService: TokenStorageService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let currentUser = this.tokenService.getUser();
    this.name = route.params['name'];

    if (
      (currentUser.role == Role.Publisher &&
        currentUser.PublisherName == this.name) ||
      currentUser.role == Role.Manager ||
      currentUser.role == Role.Admin
    )
      return true;

    return this.router.navigateByUrl('/home');
  }
}
