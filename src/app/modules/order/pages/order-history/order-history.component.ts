import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OrderDTO } from 'src/app/modules/core/api-models/order/order.dto';
import { OrderFilterDTO } from 'src/app/modules/core/api-models/order/order.filter.dto';
import { OrderStatus } from 'src/app/modules/core/enums/order.status';
import { EnumHelper } from 'src/app/modules/core/helpers/enum.helper';
import { DateService } from 'src/app/modules/core/services/date/date.service';
import { OrderService } from 'src/app/modules/shared/services/order/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
})
export class OrderHistoryComponent implements OnInit {
  public orders: Array<OrderDTO>;
  public orderHistory: OrderFilterDTO;
  public statuses: Array<string>;

  constructor(
    private orderService: OrderService,
    private dateService: DateService
  ) {
    this.orders = new Array<OrderDTO>();
    this.orderHistory = new OrderFilterDTO();
    let defaultDate = new Date();
    this.statuses = new Array<string>();
    defaultDate.setDate(defaultDate.getDate() - 30);
    this.orderHistory.to = this.dateService.converToYMDFormat(defaultDate);
    this.statuses = EnumHelper.mapNumberEnumToStringList(OrderStatus);
  }

  ngOnInit(): void {
    this.loadOrders(this.orderHistory);
  }

  loadOrders(orderHistory: OrderFilterDTO) {
    this.orderService.getOrderHistory(orderHistory).subscribe({
      next: (data) => {
        this.orders = data;
      },
    });
  }
}
