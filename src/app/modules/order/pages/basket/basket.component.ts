import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/modules/core/api-models/order/order';
import { OrderService } from 'src/app/modules/shared/services/order/order.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
})
export class BasketComponent implements OnInit {
  currentOrder: Order;
  constructor(private orderService: OrderService) {
    this.currentOrder = new Order();
  }

  ngOnInit(): void {
    this.loadOrder();
  }

  loadOrder() {
    this.orderService.getOrder().subscribe((data) => {
      this.currentOrder = data;
    });
  }
  removeOrderItem(itemId: number) {
    this.orderService.removeOrderItem(itemId).subscribe(() => {
      this.loadOrder();
    });
  }
}
