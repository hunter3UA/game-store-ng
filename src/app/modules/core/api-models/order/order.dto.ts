import { OrderStatus } from '../../enums/order.status';
import { OrderDetailsDTO } from './oreder.details.dto';

export class OrderDTO {
  public id: number;
  public customerId: string;
  public orderDate: Date;
  public expiration: Date;
  public orderDetails: Array<OrderDetailsDTO>;
  public totalSum: number;
  public status: OrderStatus;
  public freight: number;
  public shipAddress: string;
  public shipCity: string;
  public shipCountry: string;
  public shippedDate: Date;
  public shipPostalCode: number;
  public shipRegion: string;
  public shipName: string;
  public shipperCompanyName: string;
}
