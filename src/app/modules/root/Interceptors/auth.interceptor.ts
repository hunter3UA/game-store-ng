import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {
  BehaviorSubject,
  catchError,
  filter,
  from,
  lastValueFrom,
  Observable,
  switchMap,
  take,
  throwError,
} from 'rxjs';
import { JwtToken } from '../../core/api-models/auth/jwt.token';
import { RefreshTokenRequestDTO } from '../../core/api-models/auth/refresh.token.request.dto';
import { TokenStorageService } from '../../user/services/token-storage/token-storage.service';
const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  constructor(
    private tokenService: TokenStorageService,
    private cookiesService: CookieService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.tokenService.getAccessToken();

    if (
      !this.tokenService.isAuthenticated() &&
      this.tokenService.getRefreshToken()
    ) {
    }

    if (token) {
      authReq = this.addTokenHeader(req, token);
    }

    return next.handle(authReq).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(req, next);
        }
        return throwError(error);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      const refreshToken = this.tokenService.getRefreshToken();

      if (refreshToken) {
        let refreshTokenRequest: RefreshTokenRequestDTO =
          new RefreshTokenRequestDTO();
        refreshTokenRequest.refreshToken = refreshToken;
        refreshTokenRequest.expiredAccessToken =
          this.tokenService.getAccessToken();

        return this.tokenService.refreshJwtToken(refreshTokenRequest).pipe(
          switchMap((token: JwtToken) => {
            this.isRefreshing = false;
            this.tokenService.authenticate(token);
            this.refreshTokenSubject.next(token.token);

            return next.handle(this.addTokenHeader(request, token.token));
          }),
          catchError((err) => {
            this.isRefreshing = false;
            this.tokenService.signOut();
            return throwError(err);
          })
        );
      }
    }
    return this.refreshTokenSubject.pipe(
      filter((token) => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addTokenHeader(request, token)))
    );
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token),
    });
  }

  private async refreshToken(request: HttpRequest<any>, next: HttpHandler) {
    let isAuth = this.tokenService.isAuthenticated();
    let refreshToken = this.tokenService.getRefreshToken();
    if (refreshToken && !isAuth) {
      let refreshTokenRequest = new RefreshTokenRequestDTO();
      refreshTokenRequest.refreshToken = refreshToken;
      refreshTokenRequest.expiredAccessToken =
        this.tokenService.getAccessToken();
      let newToken = await lastValueFrom(
        this.tokenService.refreshJwtToken(refreshTokenRequest)
      );
      this.tokenService.authenticate(newToken);
    }

    return await lastValueFrom(next.handle(request));
  }
}
