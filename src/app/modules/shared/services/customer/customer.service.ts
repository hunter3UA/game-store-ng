import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private cookieService: CookieService) {}

  login() {
    let id = Math.random() * 100;
    sessionStorage.setItem('id', Math.round(id).toString());
  }

  isAuthorized(): boolean {
    let id: any = null;
    id = sessionStorage.getItem('id');
    console.log(id);
    if (id === null) {
      return false;
    }
    return true;
  }
}
