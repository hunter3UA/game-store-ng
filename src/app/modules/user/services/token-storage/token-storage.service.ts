import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { JwtToken } from 'src/app/modules/core/api-models/user/jwt.token';
import { RefreshTokenRequestDTO } from 'src/app/modules/core/api-models/user/refresh.token.request.dto';
import { environment } from 'src/environments/environment';

const ACCESS_TOKEN_KEY = 'access-token';
const REFRESH_TOKEN_KEY = 'refresh-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  signOut(): void {
    window.sessionStorage.clear();
    this.cookies.delete(REFRESH_TOKEN_KEY);
  }

  public saveToken(accessToken: string): void {
    window.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    window.sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  }

  refresh(refreshToken: string): Observable<JwtToken> {
    let url = `${environment.apiBaseUrl}/users/refresh`;
    return this.http.post<JwtToken>(url, refreshToken).pipe(
      tap((token) => {
        this.saveToken(token.token);
        this.saveRefreshToken(token.refreshToken);
      })
    );
  }

  public saveRefreshToken(refeshToken: string): void {
    var date = new Date();
    date.setMinutes(date.getMinutes() + 5);
    this.cookies.delete(REFRESH_TOKEN_KEY);
    this.cookies.set(REFRESH_TOKEN_KEY, refeshToken, date);
  }

  public isAuthenticated(): boolean {
    return this.cookies.check(REFRESH_TOKEN_KEY);
  }

  public getRefreshToken(): string | null {
    return this.cookies.get(REFRESH_TOKEN_KEY);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(ACCESS_TOKEN_KEY);
  }
}
