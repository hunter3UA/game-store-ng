import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDTO } from 'src/app/modules/core/api-models/order/order.dto';
import { OrderStatus } from 'src/app/modules/core/enums/order.status';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
import { BasketService } from 'src/app/modules/shared/services/basket/basketr.service';
import { OrderService } from 'src/app/modules/shared/services/order/order.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
})
export class BasketComponent implements OnInit {
  public currentOrder: OrderDTO;
  constructor(
    private basketService: BasketService,
    private orderService: OrderService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) {
    this.currentOrder = new OrderDTO();
  }

  ngOnInit(): void {
    this.loadOrder();
  }

  loadOrder() {
    this.basketService.getOrder().subscribe({
      next: (data) => {
        this.currentOrder = data;
        if (this.currentOrder.status == OrderStatus.Processing) {
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
        error: (error) => this.errorHandler.handleError(error),
      });
    }
  }

  removeOrderItem(itemId: number) {
    this.basketService.removeOrderItem(itemId).subscribe(() => {
      this.loadOrder();
    });
  }

  makeOrder() {
    if (this.currentOrder.orderDetails.length > 0) {
      this.orderService.makeOrder(this.currentOrder.id).subscribe({
        next: () => this.router.navigate(['/order']),
        error: () => {
          this.loadOrder();
          alert('Some games was deleted from your order');
        },
      });
    }
  }
}
