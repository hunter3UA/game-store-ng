import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private cookieService: CookieService) {}

  login() {
    let id = Math.random() * 100;
    this.cookieService.set('CustomerId', Math.round(id).toString(), 1 / 24);
  }

  isAuthorized(): boolean {
    let id: any = null;
    id = this.cookieService.get('CustomerId');
    console.log(id);
    if (id === '') {
      return false;
    }
    return true;
  }
}
