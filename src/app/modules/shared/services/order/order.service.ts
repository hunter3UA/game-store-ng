import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { map, Observable } from 'rxjs';
import { OrderAdapter } from 'src/app/modules/core/adapters/order.adapter';
import { OrderItemAdapter } from 'src/app/modules/core/adapters/order.item.adapter';
import { OrderModel } from 'src/app/modules/core/api-models/order/order.model';
import { OrderDetailsModel } from 'src/app/modules/core/api-models/order/oreder.details.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    private http: HttpClient,
    private orderAdapter: OrderAdapter,
    private orderitemAdapter: OrderItemAdapter,
    private cookieService: CookieService
  ) {}

  addOrderItem(gameKey: string): Observable<OrderDetailsModel> {
    let url = `${environment.apiBaseUrl}/games/${gameKey}/buy`;
    return this.http
      .post(url, +this.cookieService.get('id'))
      .pipe(map((data: any) => this.orderitemAdapter.adapt(data)));
  }

  getOrder(): Observable<OrderModel> {
    let id = this.cookieService.get('id');
    let url = `${environment.apiBaseUrl}/basket/${id}`;
    return this.http
      .get(url)
      .pipe(map((data: any) => this.orderAdapter.adapt(data)));
  }

  removeOrderItem(itemId: number): Observable<any> {
    let url = `${environment.apiBaseUrl}/basket/details/remove/${itemId}`;
    return this.http.delete(url);
  }
  changeQuantity(itemId: number, quantity: number): Observable<any> {
    let url = `${environment.apiBaseUrl}/basket/details/update`;
    return this.http.put(url, { orderDetailsId: itemId, quantity: quantity });
  }
}
