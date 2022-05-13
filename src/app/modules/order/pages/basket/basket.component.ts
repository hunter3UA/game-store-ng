import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/modules/shared/services/order/order.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
})
export class BasketComponent implements OnInit {
  currentOrder: any = {};
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrder();
  }

  loadOrder() {
    this.orderService.getOrder().subscribe((data) => {
      this.currentOrder = data;
      console.log(this.currentOrder);
    });
  }
  removeOrderItem(itemId: number) {
    this.orderService.removeOrderItem(itemId).subscribe(() => {
      this.loadOrder();
    });
  }
}
