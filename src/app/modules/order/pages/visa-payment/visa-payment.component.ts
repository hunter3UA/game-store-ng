import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDTO } from 'src/app/modules/core/api-models/order/order.dto';
import { OrderPaymentDTO } from 'src/app/modules/core/api-models/order/order.payment.dto';
import { OrderStatus } from 'src/app/modules/core/enums/order.status';
import { PaymentType } from 'src/app/modules/core/enums/payment.type';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
import { OrderService } from 'src/app/modules/shared/services/order/order.service';

@Component({
  selector: 'app-visa-payment',
  templateUrl: './visa-payment.component.html',
  styleUrls: ['./visa-payment.styles.css'],
})
export class VisaPaymentComponent implements OnInit {
  public currentOrder: OrderDTO;
  private orderPaymentModel: OrderPaymentDTO;
  constructor(
    private orderService: OrderService,
    private router: Router,
    private errorHandler: ErrorHandlerService
  ) {
    this.currentOrder = new OrderDTO();
    this.orderPaymentModel = new OrderPaymentDTO();
  }
  ngOnInit(): void {
    this.loadOrder();
  }

  loadOrder() {
    this.orderService.getOrderByCustomer().subscribe({
      next: (data) => {
        this.currentOrder = data;
        if (this.currentOrder.status != OrderStatus.Processing) {
          this.router.navigate(['/basket']);
        }
      },
      error: () => this.router.navigate(['/basket']),
    });
  }

  payOrder() {
    this.orderPaymentModel.orderId = this.currentOrder.id;
    this.orderPaymentModel.paymentType = PaymentType.VisaPayment;
    this.orderService.payOrder(this.orderPaymentModel).subscribe({
      next: () => {
        alert('Succeeded');
        this.router.navigate(['/games']);
      },
      error: (error) => this.errorHandler.handleError(error),
    });
  }
}
