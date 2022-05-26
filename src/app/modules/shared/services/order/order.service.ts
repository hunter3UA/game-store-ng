import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { OrderAdapter } from 'src/app/modules/core/adapters/order.adapter';
import { OrderModel } from 'src/app/modules/core/api-models/order/order.model';
import { OrderPaymentModel } from 'src/app/modules/core/api-models/order/order.payment.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient, private orderAdapter: OrderAdapter) {}

  makeOrder(orderId: number): Observable<any> {
    let url = `${environment.apiBaseUrl}/order/${orderId}`;
    return this.http.get(url);
  }

  getOrder(): Observable<OrderModel> {
    let url = `${environment.apiBaseUrl}/order`;
    return this.http
      .get(url, { withCredentials: true })
      .pipe(map((data: any) => this.orderAdapter.adapt(data)));
  }

  cancelOrder(orderId: number): Observable<any> {
    let url = `${environment.apiBaseUrl}/order/${orderId}`;
    return this.http.delete(url);
  }

  generateInvoiceFile(orderPaymentModel: OrderPaymentModel): Observable<any> {
    let url = `${environment.apiBaseUrl}/pay`;
    return this.http.post(url, orderPaymentModel, {
      observe: 'response',
      responseType: 'blob',
    });
  }
}
