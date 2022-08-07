import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDTO } from 'src/app/modules/core/api-models/order/order.dto';
import { SelectListItem } from 'src/app/modules/core/common/select.list.item';
import { BasketService } from 'src/app/modules/shared/services/basket/basketr.service';
import { OrderService } from 'src/app/modules/shared/services/order/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
})
export class OrderDetailsComponent implements OnInit {
  public orderToUpdate: OrderDTO;
  public id: number;
  public statuses: SelectListItem[];

  constructor(
    private orderService: OrderService,
    private basketService: BasketService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    this.orderToUpdate = new OrderDTO();
  }

  ngOnInit(): void {
    this.loadOrder();
  }

  loadOrder() {
    this.orderService.getOrderById(this.id).subscribe({
      next: (data) => {
        this.orderToUpdate = data;
      },
    });
  }

  changeQuantity(id: number, quantity: number) {
    this.orderToUpdate.orderDetails.filter((item) => {
      if (item.id == id) {
        item.quantity = quantity;
        let newTotal = item.price;
        if (item.discount != 0) {
          newTotal = item.price - (item.discount / 100) * item.price;
        }

        item.total = newTotal * item.quantity;
      }
    });
  }

  changeDiscount(id: number, discount: number) {
    this.orderToUpdate.orderDetails.filter((item) => {
      if (item.id == id && discount != 0) {
        item.discount = discount;
        let newTotal = item.price - (item.discount / 100) * item.price;
        item.total = newTotal * item.quantity;
      }
    });
  }

  removeOrderItem(detailsId: number) {
    console.log(detailsId);
    this.orderService.removeOrderDetails(detailsId).subscribe({
      next: () => this.loadOrder(),
    });
  }

  updateOrder() {
    this.orderService.updateOrder(this.orderToUpdate).subscribe({});
  }
}
