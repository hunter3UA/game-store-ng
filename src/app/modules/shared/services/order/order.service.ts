import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  addOrderItem(gameKey: string): Observable<any> {
    let url = `${environment.apiBaseUrl}games/${gameKey}/buy`;
    return this.http.post(url, 1);
  }

  getOrder(): Observable<any> {
    let url = `${environment.apiBaseUrl}basket`;
    return this.http.get(url);
  }

  removeOrderItem(itemId: number): Observable<any> {
    let url = `${environment.apiBaseUrl}basket/details/remove/${itemId}`;
    return this.http.delete(url);
  }
  changeQuantity() {}
}
