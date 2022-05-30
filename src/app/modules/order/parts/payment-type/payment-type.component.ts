import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OrderPaymentModel } from 'src/app/modules/core/api-models/order/order.payment.model';
import { PaymentType } from 'src/app/modules/core/enums/payment.type';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
import { FileService } from 'src/app/modules/shared/services/file/file.service';
import { OrderService } from 'src/app/modules/shared/services/order/order.service';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
})
export class PaymentTypeComponent {
  @Input() orderId: number;
  private orderPaymentModel: OrderPaymentModel;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private fileService: FileService,
    private errorService: ErrorHandlerService
  ) {
    this.orderPaymentModel = new OrderPaymentModel();
    this.orderId = 0;
  }

  generateInvoice() {
    this.orderPaymentModel.orderId = this.orderId;
    this.orderPaymentModel.paymentType = PaymentType.BankPayment;
    this.orderService.generateInvoiceFile(this.orderPaymentModel).subscribe({
      next: (resp) => {
        let fileName = resp.headers
          .get('content-disposition')
          ?.split(';')[1]
          .split('=')[1];
        this.fileService.downloadFile(fileName, resp);
        this.router.navigate(['/basket']);
      },
      error: (error) => this.errorService.handleError(error),
    });
  }
}
