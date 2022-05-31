import { Injectable } from '@angular/core';
import { OrderDetailsDTO } from '../api-models/order/oreder.details.dto';
import { Adapter } from './adapter';

@Injectable({ providedIn: 'root' })
export class OrderItemAdapter implements Adapter<OrderDetailsDTO> {
  adapt(item: any): OrderDetailsDTO {
    let orderDetails = new OrderDetailsDTO();
    orderDetails.id = item.id;
    orderDetails.quantity = item.quantity;
    orderDetails.customerId = item.customerId;
    orderDetails.price = item.price;

    return orderDetails;
  }
}
