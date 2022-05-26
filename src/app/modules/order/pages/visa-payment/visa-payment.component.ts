import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderModel } from 'src/app/modules/core/api-models/order/order.model';
import { OrderService } from 'src/app/modules/shared/services/order/order.service';

@Component({
  selector: 'app-visa-payment',
  templateUrl: './visa-payment.component.html',
  styleUrls: ['./visa-payment.styles.css'],
})
export class VisaPaymentComponent implements OnInit {
  public currentOrder: OrderModel;
  constructor(private orderService: OrderService, private router: Router) {
    this.currentOrder = new OrderModel();
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

  payOrder() {}
}
