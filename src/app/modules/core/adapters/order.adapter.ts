import { Injectable } from '@angular/core';
import { OrderModel } from '../api-models/order/order.model';
import { Adapter } from './adapter';

@Injectable({ providedIn: 'root' })
export class OrderAdapter implements Adapter<OrderModel> {
  adapt(item: any): OrderModel {
    let order = new OrderModel();
    order.id = item.id;
    order.customerId = item.customerId;
    order.orderDate = item.orderDate;
    order.orderDetails = item.orderDetails;
    order.totalSum = item.totalSum;
    order.status = item.status;
    return order;
  }
}
