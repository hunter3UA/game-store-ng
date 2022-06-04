import { PaymentType } from '../../enums/payment.type';

export class OrderPaymentDTO {
  orderId: number;
  paymentType: PaymentType;
}
