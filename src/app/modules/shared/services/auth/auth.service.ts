import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { JwtToken } from 'src/app/modules/core/api-models/auth/jwt.token';
import { LoginDTO } from 'src/app/modules/core/api-models/auth/login.dto';
import { RegisterDTO } from 'src/app/modules/core/api-models/auth/register.dto';
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
    let url = `${environment.apiBaseUrl}/authentication`;
    return this.http.post<JwtToken>(url, registerDto).pipe(
      tap((token) => {
        this.tokenService.authenticate(token);
      })
    );
  }

  login(login: LoginDTO): Observable<JwtToken> {
    let url = `${environment.apiBaseUrl}/authentication/login`;
    return this.http.post<JwtToken>(url, login, { withCredentials: true }).pipe(
      tap((token) => {
        this.tokenService.authenticate(token);
      })
    );
  }
}
