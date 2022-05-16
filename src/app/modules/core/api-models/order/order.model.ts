import { OrderDetailsModel } from './oreder.details.model';

export class OrderModel {
  id: number;
  customerId: number;
  orderDate: string;
  orderDetails: Array<OrderDetailsModel>;
  totalSum: number;
}
