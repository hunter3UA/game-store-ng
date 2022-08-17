import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { OrderAdapter } from 'src/app/modules/core/adapters/order.adapters/order.adapter';
import { OrderItemAdapter } from 'src/app/modules/core/adapters/order.item.adapter';
import { OrderDTO } from 'src/app/modules/core/api-models/order/order.dto';
import { OrderDetailsDTO } from 'src/app/modules/core/api-models/order/oreder.details.dto';
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

  addOrderItem(gameKey: string): Observable<OrderDetailsDTO> {
    let url = `${environment.apiBaseUrl}/basket/games/${gameKey}/buy`;
    return this.http
      .get(url, { withCredentials: true })
      .pipe(map((data: any) => this.orderitemAdapter.adapt(data)));
  }

  getOrder(): Observable<OrderDTO> {
    let url = `${environment.apiBaseUrl}/basket`;
    return this.http
      .get(url, { withCredentials: true })
      .pipe(map((data: any) => this.orderAdapter.adapt(data)));
  }

  removeOrderItem(itemId: number): Observable<boolean> {
    let url = `${environment.apiBaseUrl}/basket/details/${itemId}`;
    return this.http.delete<boolean>(url);
  }
  changeQuantity(
    itemId: number,
    quantity: number
  ): Observable<OrderDetailsDTO> {
    let url = `${environment.apiBaseUrl}/basket/details/update`;
    return this.http.put<OrderDetailsDTO>(url, {
      orderDetailsId: itemId,
      quantity: quantity,
    });
  }
}
