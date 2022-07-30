import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, tap } from 'rxjs';
import { JwtToken } from 'src/app/modules/core/api-models/user/jwt.token';
import { LoginDTO } from 'src/app/modules/core/api-models/user/login.dto';
import { RefreshTokenRequestDTO } from 'src/app/modules/core/api-models/user/refresh.token.request.dto';
import { RegisterDTO } from 'src/app/modules/core/api-models/user/register.dto';
import { TokenStorageService } from 'src/app/modules/user/services/token-storage/token-storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private tokenService: TokenStorageService
  ) {}

  register(registerDto: RegisterDTO): Observable<JwtToken> {
    let url = `${environment.apiBaseUrl}/users`;
    return this.http.post<JwtToken>(url, registerDto);
  }

  login(login: LoginDTO): Observable<JwtToken> {
    let url = `${environment.apiBaseUrl}/users/login`;
    return this.http.post<JwtToken>(url, login).pipe(
      tap((token) => {
        this.tokenService.saveToken(token.token);
        this.tokenService.saveRefreshToken(token.refreshToken);
      })
    );
  }
}
