import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { OrderDTO } from 'src/app/modules/core/api-models/order/order.dto';
import { OrderPaymentDTO } from 'src/app/modules/core/api-models/order/order.payment.dto';
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
  @Input() orderToUpdate: OrderDTO;
  @Input() isValid: boolean;
  private orderPaymentModel: OrderPaymentDTO;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private fileService: FileService,
    private errorService: ErrorHandlerService
  ) {
    this.orderPaymentModel = new OrderPaymentDTO();
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
        this.fileService.downloadFile(fileName, resp.body);
        this.router.navigate(['/games']);
        alert('Succeeded');
      },
      error: (error) => this.errorService.handleError(error),
    });
  }
}
