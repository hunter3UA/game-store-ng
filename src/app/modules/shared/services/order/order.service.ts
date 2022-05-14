import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { OrderAdapter } from 'src/app/modules/core/adapters/order.adapter';
import { OrderItemAdapter } from 'src/app/modules/core/adapters/order.item.adapter';
import { Order } from 'src/app/modules/core/api-models/order/order';
import { OrderDetails } from 'src/app/modules/core/api-models/order/oreder.details';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    private http: HttpClient,
    private orderAdapter: OrderAdapter,
    private orderitemAdapter: OrderItemAdapter
  ) {}

  addOrderItem(gameKey: string): Observable<OrderDetails> {
    let url = `${environment.apiBaseUrl}games/${gameKey}/buy`;
    return this.http
      .post(url, 1)
      .pipe(map((data: any) => this.orderitemAdapter.adapt(data)));
  }

  getOrder(): Observable<Order> {
    let url = `${environment.apiBaseUrl}basket`;
    return this.http
      .get(url)
      .pipe(map((data: any) => this.orderAdapter.adapt(data)));
  }

  removeOrderItem(itemId: number): Observable<any> {
    let url = `${environment.apiBaseUrl}basket/details/remove/${itemId}`;
    return this.http.delete(url);
  }
  changeQuantity(itemId: number, quantity: number): Observable<any> {
    let url = `${environment.apiBaseUrl}basket/details/update`;
    return this.http.put(url, { orderDetailsId: itemId, quantity: quantity });
  }
}
