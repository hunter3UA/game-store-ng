import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Role } from 'src/app/modules/core/enums/role';
import { User } from 'src/app/modules/core/models/user';

const ACCESS_TOKEN_KEY = 'access-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor(private router: Router) {}

  public authenticate(token: string) {
    this.saveAccessToken(token);
    this.saveUser(token);
  }

  public saveAccessToken(accessToken: string): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
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

  public getUser(): User {
    return JSON.parse(localStorage.getItem(USER_KEY));
  }

  public hasPermission(roles: Array<string>): boolean {
    let isAuthenticated = this.isAuthenticated();
    let currentUser = this.getUser();
    if (!isAuthenticated) return false;
    if (roles.includes(currentUser.role)) return true;

    return false;
  }

  public hasPublisherPermission(publisherName: string) {
    let currentUser = this.getUser();
    if (
      currentUser &&
      currentUser.role == Role.Publisher &&
      currentUser.PublisherName == publisherName
    ) {
      return true;
    }
    return false;
  }

  public signOut(): void {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
