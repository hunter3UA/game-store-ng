import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  banUser(): Observable<any> {
    let url = `${environment.apiBaseUrl}/users/ban`;
    return this.http.get(url);
  }
}