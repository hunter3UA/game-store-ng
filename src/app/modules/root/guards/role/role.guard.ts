import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/modules/core/models/user';
import { TokenStorageService } from 'src/app/modules/user/services/token-storage/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
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
    let roles: Array<string> = route.data['roles'];
    let isSucceded = false;
    let currentUser: User = this.tokenService.getUser();
    roles.forEach((el) => {
      if (el == currentUser.role) isSucceded = true;
    });

    return isSucceded ? isSucceded : this.router.navigateByUrl('/home');
  }
}
