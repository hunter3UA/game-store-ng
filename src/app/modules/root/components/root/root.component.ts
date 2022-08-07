import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RefreshTokenRequestDTO } from 'src/app/modules/core/api-models/auth/refresh.token.request.dto';
import { TokenStorageService } from 'src/app/modules/user/services/token-storage/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
})
export class RootComponent implements OnInit {
  public jwtHelper: JwtHelperService;
  constructor(private tokenService: TokenStorageService) {}
  ngOnInit(): void {
    this.jwtHelper = new JwtHelperService();
    this.authenticate();
  }

  authenticate() {
    if (
      !this.tokenService.isAuthenticated() &&
      this.tokenService.getRefreshToken()
    ) {
      let refreshTokenRequest = new RefreshTokenRequestDTO();
      refreshTokenRequest.expiredAccessToken =
        this.tokenService.getAccessToken();
      refreshTokenRequest.refreshToken = this.tokenService.getRefreshToken();
      this.tokenService.refreshJwtToken(refreshTokenRequest).subscribe();
    }
  }
}
