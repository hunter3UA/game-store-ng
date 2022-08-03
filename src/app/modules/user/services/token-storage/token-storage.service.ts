import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { JwtToken } from 'src/app/modules/core/api-models/auth/jwt.token';
import { RefreshTokenRequestDTO } from 'src/app/modules/core/api-models/auth/refresh.token.request.dto';
import { User } from 'src/app/modules/core/models/user';
import { environment } from 'src/environments/environment';

const ACCESS_TOKEN_KEY = 'access-token';
const REFRESH_TOKEN_KEY = 'refresh-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor(
    private http: HttpClient,
    private cookies: CookieService,
    private router: Router
  ) {}

  public authenticate(token: JwtToken) {
    this.saveAccessToken(token.token);
    this.saveRefreshToken(token.refreshToken);
    this.saveUser(token.token);
  }

  public saveAccessToken(accessToken: string): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  }

  public saveRefreshToken(refeshToken: string): void {
    var date = new Date();
    date.setDate(date.getUTCDay() + 7);
    this.cookies.delete(REFRESH_TOKEN_KEY);
    this.cookies.set(REFRESH_TOKEN_KEY, refeshToken, date);
  }

  public saveUser(accessToken: string): void {
    let jwtHelper = new JwtHelperService();
    let currentUser: User = jwtHelper.decodeToken(accessToken);
    localStorage.setItem(USER_KEY, JSON.stringify(currentUser));
  }

  public isAuthenticated(): boolean {
    let jwtHelper = new JwtHelperService();
    let accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    return accessToken && !jwtHelper.isTokenExpired(accessToken);
  }

  public getAccessToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }

  public getRefreshToken(): string | null {
    return this.cookies.get(REFRESH_TOKEN_KEY);
  }

  public getUser(): User {
    return JSON.parse(localStorage.getItem(USER_KEY));
  }

  public refreshJwtToken(
    refreshToken: RefreshTokenRequestDTO
  ): Observable<JwtToken> {
    let url = `${environment.apiBaseUrl}/authentication/refresh`;
    return this.http.post<JwtToken>(url, refreshToken).pipe(
      tap((token) => {
        this.authenticate(token);
      })
    );
  }

  public signOut(): void {
    localStorage.clear();
    this.cookies.delete(REFRESH_TOKEN_KEY);
    this.router.navigateByUrl('/login');
  }
}
