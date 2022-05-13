import { Injectable } from '@angular/core';
import { Order } from '../api-models/order/order';
import { Adapter } from './adapter';

@Injectable({ providedIn: 'root' })
export class OrderAdapter implements Adapter<Order> {
  adapt(item: any): Order {
    let order = new Order();
    order.id = item.id;
    order.customerId = item.customerId;
    order.orderDate = item.orderDate;
    order.orderDetails = item.orderDetails;
    order.totalSum = item.totalSum;
    return order;
  }
}
