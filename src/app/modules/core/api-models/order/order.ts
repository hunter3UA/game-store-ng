import { OrderDetail } from './oreder.details';

export class Order {
  id: number;
  customerId: number;
  orderDate: string;
  orderDetails: Array<OrderDetail>;
  totalSum: number;
}
