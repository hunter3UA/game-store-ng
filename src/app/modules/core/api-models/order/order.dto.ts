import { OrderStatus } from '../../enums/order.status';
import { OrderDetailsDTO } from './oreder.details.dto';

export class OrderDTO {
  public id: number;
  public customerId: number;
  public orderDate: Date;
  public orderDetails: Array<OrderDetailsDTO>;
  public totalSum: number;
  public status: OrderStatus;
  public freight: number;
  public shipAddress: string;
  public shipCity: string;
  public shipCountry: string;
  public shippedDate: Date;
  public shipPostalCode: string;
  public shipRegion: string;
  public shipVia: number;
  public shipName: string;
  public shipperCompanyName: string;
}
