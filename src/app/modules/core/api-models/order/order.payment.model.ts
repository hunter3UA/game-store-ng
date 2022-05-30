import { PaymentType } from '../../enums/payment.type';

export class OrderPaymentModel {
  orderId: number;
  paymentType: PaymentType;
}
