import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/modules/core/api-models/order/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  addOrderItem(gameKey: string, price: number): Observable<any> {
    let url = `${environment.apiBaseUrl}games/${gameKey}/buy`;
    return this.http.post(url, { customerId: 1, price: price });
  }

  getOrder(): Observable<any> {
    let url = `${environment.apiBaseUrl}basket`;
    return this.http.get(url);
  }
}
