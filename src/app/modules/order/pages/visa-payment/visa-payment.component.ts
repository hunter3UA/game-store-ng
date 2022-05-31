import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDTO } from 'src/app/modules/core/api-models/order/order.dto';
import { OrderPaymentDTO } from 'src/app/modules/core/api-models/order/order.payment.dto';
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
    console.log(this.currentOrder);
    this.orderPaymentModel.orderId = this.currentOrder.id;
    this.orderPaymentModel.paymentType = 2;
    this.orderService.payOrder(this.orderPaymentModel).subscribe({
      next: () => {
        alert('Succeeded');
        this.router.navigate(['/basket']);
      },
      error: (error) => this.errorHandler.handleError(error),
    });
  }
}
