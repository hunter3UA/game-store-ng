import { Injectable } from '@angular/core';
import { OrderDetailsModel } from '../api-models/order/oreder.details.model';
import { Adapter } from './adapter';

@Injectable({ providedIn: 'root' })
export class OrderItemAdapter implements Adapter<OrderDetailsModel> {
  adapt(item: any): OrderDetailsModel {
    let orderDetails = new OrderDetailsModel();
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
