import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Adapter } from 'src/app/modules/core/adapters/adapter';
import { OrderAdapter } from 'src/app/modules/core/adapters/order.adapters/order.adapter';
import { OrderDTO } from 'src/app/modules/core/api-models/order/order.dto';
import { OrderFilterDTO } from 'src/app/modules/core/api-models/order/order.history.dto';
import { OrderPaymentDTO } from 'src/app/modules/core/api-models/order/order.payment.dto';
import { OrderDetailsDTO } from 'src/app/modules/core/api-models/order/oreder.details.dto';
import { UpdateOrderDTO } from 'src/app/modules/core/api-models/order/update.order.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient, private orderAdapter: OrderAdapter) {}

  makeOrder(orderId: number): Observable<OrderDTO> {
    let url = `${environment.apiBaseUrl}/orders`;
    return this.http
      .post(url, orderId)
      .pipe(map((data: any) => this.orderAdapter.adapt(data)));
  }

  getOrderByCustomer(): Observable<OrderDTO> {
    let url = `${environment.apiBaseUrl}/order`;
    return this.http
      .get(url, { withCredentials: true })
      .pipe(map((data: any) => this.orderAdapter.adapt(data)));
  }

  getOrderById(orderId: number): Observable<OrderDTO> {
    let url = `${environment.apiBaseUrl}/orders/${orderId}`;
    return this.http
      .get(url)
      .pipe(map((data: any) => this.orderAdapter.adapt(data)));
  }

  getOrderHistory(orderFilterDTO: any): Observable<Array<OrderDTO>> {
    let url = `${environment.apiBaseUrl}/orders/history`;
    return this.http
      .get<Array<OrderDTO>>(url, { params: orderFilterDTO })
      .pipe(
        map((data: any[]) => data.map((item) => this.orderAdapter.adapt(item)))
      );
  }

  getStoreOrders(orderFilterDTO: any): Observable<Array<OrderDTO>> {
    let url = `${environment.apiBaseUrl}/orders`;
    return this.http
      .get(url, { params: orderFilterDTO })
      .pipe(
        map((data: any[]) => data.map((item) => this.orderAdapter.adapt(item)))
      );
  }

  updateOrder(orderToUpdate: OrderDTO): Observable<any> {
    let url = `${environment.apiBaseUrl}/orders`;
    return this.http.put(url, orderToUpdate);
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

  removeOrderDetails(orderDetailsId: number) {
    let url = `${environment.apiBaseUrl}/orders/details/${orderDetailsId}`;
    return this.http.delete(url);
  }

  changeQuantity(
    itemId: number,
    quantity: number
  ): Observable<OrderDetailsDTO> {
    let url = `${environment.apiBaseUrl}/orders/details/update`;
    return this.http.put<OrderDetailsDTO>(url, {
      orderDetailsId: itemId,
      quantity: quantity,
    });
  }

  payOrder(orderPaymentModel: OrderPaymentDTO): Observable<any> {
    let url = `${environment.apiBaseUrl}/orders/pay`;
    return this.http.post(url, orderPaymentModel);
  }
}
