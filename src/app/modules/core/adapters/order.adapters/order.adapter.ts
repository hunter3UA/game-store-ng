import { Injectable } from '@angular/core';
import { OrderDTO } from '../../api-models/order/order.dto';
import { Adapter } from '../adapter';

@Injectable({ providedIn: 'root' })
export class OrderAdapter implements Adapter<OrderDTO> {
  adapt(item: any): OrderDTO {
    let order = new OrderDTO();
    order.id = item.id;
    order.customerId = item.customerId;
    order.orderDate = item.orderDate;
    order.orderDetails = item.orderDetails;
    order.totalSum = item.totalSum;
    order.status = item.status;
    order.freight = item.freight;
    order.shipAddress = item.shipAddress;
    order.shipCountry = item.shipCountry;
    order.shipCity = item.shipCity;
    order.shipName = item.shipName;
    order.shippedDate = item.shippedDate;
    order.shipPostalCode = item.shipPostalCode;
    order.shipRegion = item.shipRegion;
    order.shipperCompanyName = item.shipperCompanyName;
    order.expiration = item.expiration;
    return order;
  }
}
