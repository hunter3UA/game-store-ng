import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDTO } from 'src/app/modules/core/api-models/order/order.dto';
import { SelectListItem } from 'src/app/modules/core/common/select.list.item';
import { OrderStatus } from 'src/app/modules/core/enums/order.status';
import { Role } from 'src/app/modules/core/enums/role';
import { EnumHelper } from 'src/app/modules/core/helpers/enum.helper';
import { OrderService } from 'src/app/modules/shared/services/order/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
})
export class OrderDetailsComponent implements OnInit {
  public orderToUpdate: OrderDTO = new OrderDTO();
  public id: number;
  public statuses: Array<SelectListItem>;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    this.orderToUpdate = new OrderDTO();
    this.statuses = EnumHelper.mapNumberEnumToSelectList(OrderStatus);
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

  changeDetails(id: number) {
    let detailsToUpdate = this.orderToUpdate.orderDetails.find((od) => {
      return od.id == id;
    });
    detailsToUpdate.total =
      detailsToUpdate.price * detailsToUpdate.quantity -
      detailsToUpdate.discount;
  }

  removeOrderItem(detailsId: number) {
    this.orderService.removeOrderDetails(detailsId).subscribe({
      next: () => this.loadOrder(),
    });
  }

  updateOrder() {
    this.orderService.updateOrder(this.orderToUpdate).subscribe({});
  }
}
