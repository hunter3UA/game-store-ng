import { OrderDetails } from './oreder.details';

export class Order {
  id: number;
  customerId: number;
  orderDate: string;
  orderDetails: Array<OrderDetails>;
  totalSum: number;
}
