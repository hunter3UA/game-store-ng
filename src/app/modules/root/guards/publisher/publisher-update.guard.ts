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
import { TypeOfBase } from 'src/app/modules/core/enums/type.of.base';
import { GameService } from 'src/app/modules/shared/services/game/game.service';
import { PublisherService } from 'src/app/modules/shared/services/publisher/publisher.service';
import { TokenStorageService } from 'src/app/modules/user/services/token-storage/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class PublisherUpdateGuard implements CanActivate {
  public name: string;
  constructor(
    private publisherService: PublisherService,
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
    if (!this.tokenService.isAuthenticated())
      this.router.navigateByUrl('/login');
    this.name = route.params['name'];
    return this.checkAccess();
  }

  async checkAccess() {
    await this.getPublisherAsync();
    let currentUser = this.tokenService.getUser();

    if (
      (currentUser.role == Role.Publisher &&
        currentUser.PublisherName == this.name) ||
      currentUser.role == Role.Manager ||
      currentUser.role == Role.Admin
    )
      return true;

    return this.router.navigateByUrl('/home');
  }

  async getPublisherAsync() {
    let publisherToSearch = this.publisherService.getPublisher(this.name);
    try {
      let publisherByName = await lastValueFrom(publisherToSearch);
      if (publisherByName.typeOfBase == TypeOfBase.Northwind)
        return this.router.navigateByUrl('/publishers');
    } catch (error) {
      this.router.navigateByUrl('/publishers');
    }
    return true;
  }
}
