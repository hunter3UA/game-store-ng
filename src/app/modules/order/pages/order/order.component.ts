import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderModel } from 'src/app/modules/core/api-models/order/order.model';
import { BasketService } from 'src/app/modules/shared/services/basket/basketr.service';
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
        console.log(data);
      },
      error: (error) => this.router.navigate(['/basket']),
    });
  }
}
