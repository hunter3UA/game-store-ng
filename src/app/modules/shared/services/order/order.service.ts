import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { OrderAdapter } from 'src/app/modules/core/adapters/order.adapter';
import { OrderDTO } from 'src/app/modules/core/api-models/order/order.dto';
import { OrderHistoryDTO } from 'src/app/modules/core/api-models/order/order.history.dto';
import { OrderPaymentDTO } from 'src/app/modules/core/api-models/order/order.payment.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient, private orderAdapter: OrderAdapter) {}

  makeOrder(orderId: number): Observable<OrderDTO> {
    let url = `${environment.apiBaseUrl}/orders/${orderId}`;
    return this.http
      .get(url)
      .pipe(map((data: any) => this.orderAdapter.adapt(data)));
  }

  getOrder(): Observable<OrderDTO> {
    let url = `${environment.apiBaseUrl}/order`;
    return this.http
      .get(url, { withCredentials: true })
      .pipe(map((data: any) => this.orderAdapter.adapt(data)));
  }

  getOrders(orderHistoryDTO: any): Observable<Array<OrderDTO>> {
    let url = `${environment.apiBaseUrl}/orders`;
    return this.http
      .get(url, { params: orderHistoryDTO })
      .pipe(
        map((data: any[]) => data.map((item) => this.orderAdapter.adapt(item)))
      );
  }

  cancelOrder(orderId: number): Observable<boolean> {
    let url = `${environment.apiBaseUrl}/orders/${orderId}`;
    return this.http.delete<boolean>(url);
  }

  generateInvoiceFile(orderPaymentModel: OrderPaymentDTO): Observable<any> {
    let url = `${environment.apiBaseUrl}/orders/pay`;
    return this.http.post(url, orderPaymentModel, {
      observe: 'response',
      responseType: 'blob',
    });
  }

  payOrder(orderPaymentModel: OrderPaymentDTO): Observable<any> {
    let url = `${environment.apiBaseUrl}/orders/pay`;
    return this.http.post(url, orderPaymentModel);
  }
}
