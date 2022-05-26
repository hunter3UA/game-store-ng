import { Component, Input } from '@angular/core';
import { OrderPaymentModel } from 'src/app/modules/core/api-models/order/order.payment.model';
import { OrderService } from 'src/app/modules/shared/services/order/order.service';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
})
export class PaymentTypeComponent {
  @Input() orderId: number;
  private orderPaymentModel: OrderPaymentModel;

  constructor(private orderService: OrderService) {
    this.orderPaymentModel = new OrderPaymentModel();
    this.orderId = 0;
  }

  generateInvoice() {
    console.log(this.orderId);
    this.orderPaymentModel.orderId = this.orderId;
    this.orderPaymentModel.paymentType = 1;
    this.orderService.generateInvoiceFile(this.orderPaymentModel).subscribe({
      next: (resp) => {
        let fileName = resp.headers
          .get('content-disposition')
          ?.split(';')[1]
          .split('=')[1];

        let blob: Blob = resp.body as Blob;
        let a = document.createElement('a');
        a.download = fileName;
        a.href = window.URL.createObjectURL(blob);
        a.click();
      },
    });
  }
}
