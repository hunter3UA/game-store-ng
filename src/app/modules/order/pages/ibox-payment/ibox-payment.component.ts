import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { OrderModel } from 'src/app/modules/core/api-models/order/order.model';
import { OrderPaymentModel } from 'src/app/modules/core/api-models/order/order.payment.model';
import { PaymentType } from 'src/app/modules/core/enums/payment.type';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
import { OrderService } from 'src/app/modules/shared/services/order/order.service';

@Component({
  selector: 'app-ibox-payment',
  templateUrl: './ibox-payment.component.html',
  styleUrls: ['./ibox-payment.component.css'],
})
export class IboxPaymentComponent implements OnInit {
  public currentOrder: OrderModel;
  private orderPaymentModel: OrderPaymentModel;
  constructor(
    private orderService: OrderService,
    private router: Router,
    private errorHandler: ErrorHandlerService
  ) {
    this.currentOrder = new OrderModel();
    this.orderPaymentModel = new OrderPaymentModel();
  }
  ngOnInit(): void {
    this.loadOrder();
  }

  loadOrder() {
    this.orderService.getOrder().subscribe({
      next: (data) => {
        this.currentOrder = data;
        if (this.currentOrder.status != 1) {
          this.router.navigate(['/basket']);
        }
      },
      error: () => this.router.navigate(['/basket']),
    });
  }

  payOrder() {
    this.orderPaymentModel.orderId = this.currentOrder.id;
    this.orderPaymentModel.paymentType = PaymentType.IBoxPayment;
    this.orderService.payOrder(this.orderPaymentModel).subscribe({
      next: () => {
        alert('Succeeded');
        this.router.navigate(['/basket']);
      },
      error: (error) => this.errorHandler.handleError(error),
    });
  }
}
