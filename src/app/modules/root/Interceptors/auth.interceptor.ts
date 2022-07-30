import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import {
  BehaviorSubject,
  catchError,
  filter,
  Observable,
  switchMap,
  take,
  throwError,
} from 'rxjs';
import { RefreshTokenRequestDTO } from '../../core/api-models/user/refresh.token.request.dto';
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
    let jwtHelper = new JwtHelperService();
    let authReq = req;
    const token = this.tokenService.getToken();

    if (token != null) {
      authReq = this.addTokenHeader(req, token);
    }
    let refresh = this.tokenService.getRefreshToken();
    if ((token == null || jwtHelper.isTokenExpired(token)) && refresh) {
      let refreshToken = this.tokenService.getRefreshToken();
      console.log(refreshToken);
      this.tokenService.refresh(refreshToken).subscribe({
        next: (tokens) => {
          this.tokenService.saveToken(tokens.token);
          this.tokenService.saveRefreshToken(tokens.refreshToken);
        },
      });
    }
    // } else {
    //   let expiredToken = new RefreshTokenRequestDTO();
    //   expiredToken.refreshToken = this.tokenService.getRefreshToken();
    //   expiredToken.expiredAccessToken = token;
    //   this.tokenService.refresh(expiredToken).subscribe({});
    // }
    return next.handle(authReq).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(req, next, token);
        } else {
          return throwError(error);
        }
      })
    );
  }

  private handle401Error(
    request: HttpRequest<any>,
    next: HttpHandler,
    accessToken: string
  ) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      const token = this.tokenService.getRefreshToken();
      console.log('TOKEN', token);

      if (token) {
        let refreshTokenRequest: RefreshTokenRequestDTO =
          new RefreshTokenRequestDTO();

        return this.tokenService.refresh(token).pipe(
          switchMap((token: any) => {
            this.isRefreshing = false;
            this.tokenService.saveToken(token.accessToken);
            this.refreshTokenSubject.next(token.accessToken);

            return next.handle(this.addTokenHeader(request, token.accessToken));
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
}
