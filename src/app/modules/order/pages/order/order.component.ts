import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderModel } from 'src/app/modules/core/api-models/order/order.model';
import { OrderService } from 'src/app/modules/shared/services/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {
  public currentOrder: OrderModel;
  constructor(private router: Router, private orderService: OrderService) {
    this.currentOrder = new OrderModel();
  }

  ngOnInit(): void {
    this.loadOrder();
  }

  loadOrder() {
    this.orderService.getOrder().subscribe({
      next: (data) => {
        this.currentOrder = data;
      },
      error: () => this.router.navigate(['/basket']),
    });
  }

  cancelOrder() {
    this.orderService.cancelOrder(this.currentOrder.id).subscribe({
      next: () => this.router.navigate(['/basket']),
    });
  }
}
