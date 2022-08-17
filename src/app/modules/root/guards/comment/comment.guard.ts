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
import { TypeOfBase } from 'src/app/modules/core/enums/type.of.base';
import { GameService } from 'src/app/modules/shared/services/game/game.service';

@Injectable({
  providedIn: 'root',
})
export class CommentGuard implements CanActivate {
  constructor(private gameService: GameService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let key = route.params['gamekey'];
    return this.getGameAsync(key);
  }

  async getGameAsync(key: string) {
    let gameToSearch = this.gameService.getGameByKey(key, false);

    try {
      let gameByKey = await lastValueFrom(gameToSearch);
      if (gameByKey.typeOfBase == TypeOfBase.Northwind) {
        return this.router.navigateByUrl(`/games/${key}`);
      }
    } catch (error) {
      this.router.navigateByUrl('/games');
    }

    return true;
  }
}
