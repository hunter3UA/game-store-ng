import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { RefreshTokenRequestDTO } from 'src/app/modules/core/api-models/auth/refresh.token.request.dto';
import { TokenStorageService } from 'src/app/modules/user/services/token-storage/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
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
    if (this.tokenService.isAuthenticated()) return true;
    else if (
      !this.tokenService.isAuthenticated() &&
      this.tokenService.getRefreshToken()
    ) {
      return this.refreshAsync();
    }
    return this.router.navigateByUrl('/login');
  }

  async refreshAsync() {
    let refreshTokenRequestDTO = new RefreshTokenRequestDTO();
    refreshTokenRequestDTO.expiredAccessToken =
      this.tokenService.getAccessToken();
    refreshTokenRequestDTO.refreshToken = this.tokenService.getRefreshToken();
    let resp = await lastValueFrom(
      this.tokenService.refreshJwtToken(refreshTokenRequestDTO)
    );
    this.tokenService.authenticate(resp);
    return true;
  }
}
