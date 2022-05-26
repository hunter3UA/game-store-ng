import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderModel } from 'src/app/modules/core/api-models/order/order.model';
import { BasketService } from 'src/app/modules/shared/services/basket/basketr.service';
import { OrderService } from 'src/app/modules/shared/services/order/order.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
})
export class BasketComponent implements OnInit {
  public currentOrder: OrderModel;
  constructor(
    private basketService: BasketService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.currentOrder = new OrderModel();
  }

  ngOnInit(): void {
    this.loadOrder();
  }

  loadOrder() {
    this.basketService.getOrder().subscribe({
      next: (data) => {
        this.currentOrder = data;
        if (this.currentOrder.status == 1) {
          this.router.navigate(['/order']);
        }
      },
    });
  }

  changeQuantity(id: number, quantity: number) {
    let val: boolean = false;
    this.currentOrder.orderDetails.filter((item) => {
      if (item.id == id && item.quantity != quantity) {
        val = true;
      }
    });
    if (val) {
      this.basketService.changeQuantity(+id, +quantity).subscribe({
        next: () => this.loadOrder(),
        error: (error) => console.log(error),
      });
    }
  }

  removeOrderItem(itemId: number) {
    this.basketService.removeOrderItem(itemId).subscribe(() => {
      this.loadOrder();
    });
  }

  makeOrder() {
    this.orderService.makeOrder(this.currentOrder.id).subscribe({
      next: (data) => this.router.navigate(['/order']),
      error: (error) => {
        this.loadOrder();
        alert('Some games was deleted from your order');
      },
    });
  }
}
