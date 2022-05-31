import { OrderDetailsDTO } from './oreder.details.dto';

export class OrderDTO {
  public id: number;
  public customerId: number;
  public orderDate: Date;
  public orderDetails: Array<OrderDetailsDTO>;
  public totalSum: number;
  public status: number;
}
