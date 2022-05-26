import { OrderDetailsModel } from './oreder.details.model';

export class OrderModel {
  public id: number;
  public customerId: number;
  public orderDate: string;
  public orderDetails: Array<OrderDetailsModel>;
  public totalSum: number;
  public status: number;
}
