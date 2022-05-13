import { Injectable } from '@angular/core';
import { OrderDetails } from '../api-models/order/oreder.details';
import { Adapter } from './adapter';

@Injectable({ providedIn: 'root' })
export class OrderItemAdapter implements Adapter<OrderDetails> {
  adapt(item: any): OrderDetails {
    let orderDetails = new OrderDetails();
    orderDetails.id = item.id;
    orderDetails.quantity = item.quantity;
    orderDetails.customerId = item.customerId;
    orderDetails.price = item.price;

    return orderDetails;
  }
}
/**id: number;
  quantity: number;
  customerId: number;
  price: number;
  discount: number;
  orderId: number;
  game: Game;
  total: number; */
