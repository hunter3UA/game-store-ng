import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { OrderAdapter } from 'src/app/modules/core/adapters/order.adapter';
import { OrderItemAdapter } from 'src/app/modules/core/adapters/order.item.adapter';
import { OrderModel } from 'src/app/modules/core/api-models/order/order.model';
import { OrderDetailsModel } from 'src/app/modules/core/api-models/order/oreder.details.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  constructor(
    private http: HttpClient,
    private orderAdapter: OrderAdapter,
    private orderitemAdapter: OrderItemAdapter
  ) {}

  addOrderItem(gameKey: string): Observable<OrderDetailsModel> {
    let url = `${environment.apiBaseUrl}/games/${gameKey}/buy`;
    return this.http
      .get(url, { withCredentials: true })
      .pipe(map((data: any) => this.orderitemAdapter.adapt(data)));
  }

  getOrder(): Observable<OrderModel> {
    let url = `${environment.apiBaseUrl}/basket`;
    return this.http
      .get(url, { withCredentials: true })
      .pipe(map((data: any) => this.orderAdapter.adapt(data)));
  }

  removeOrderItem(itemId: number): Observable<boolean> {
    let url = `${environment.apiBaseUrl}/basket/details/remove/${itemId}`;
    return this.http.delete<boolean>(url);
  }
  changeQuantity(
    itemId: number,
    quantity: number
  ): Observable<OrderDetailsModel> {
    let url = `${environment.apiBaseUrl}/basket/details/update`;
    return this.http.put<OrderDetailsModel>(url, {
      orderDetailsId: itemId,
      quantity: quantity,
    });
  }
}
