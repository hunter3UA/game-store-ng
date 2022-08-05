import { Component, OnInit } from '@angular/core';
import { OrderDTO } from 'src/app/modules/core/api-models/order/order.dto';
import { OrderFilterDTO } from 'src/app/modules/core/api-models/order/order.history.dto';
import { OrderStatus } from 'src/app/modules/core/enums/order.status';
import { EnumHelper } from 'src/app/modules/shared/helpers/enum.helper';
import { OrderService } from 'src/app/modules/shared/services/order/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
})
export class OrderListComponent implements OnInit {
  public orders: Array<OrderDTO>;
  public orderFilterDTO: OrderFilterDTO;
  public statuses: Array<string>;
  public enumHelper = new EnumHelper();

  constructor(private orderService: OrderService) {
    this.orders = new Array<OrderDTO>();
    this.orderFilterDTO = new OrderFilterDTO();
    this.statuses = this.enumHelper.mapToStrinList(OrderStatus);
  }

  ngOnInit(): void {
    this.loadOrders(this.orderFilterDTO);
  }

  loadOrders(orderHistory: OrderFilterDTO) {
    this.orderService.getStoreOrders(orderHistory).subscribe({
      next: (data) => {
        this.orders = data;
      },
    });
  }
}
