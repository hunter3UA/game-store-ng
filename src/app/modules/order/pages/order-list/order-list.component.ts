import { DatePipe, formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { OrderDTO } from 'src/app/modules/core/api-models/order/order.dto';
import { OrderFilterDTO } from 'src/app/modules/core/api-models/order/order.filter.dto';
import { OrderStatus } from 'src/app/modules/core/enums/order.status';
import { EnumHelper } from 'src/app/modules/core/helpers/enum.helper';
import { DateService } from 'src/app/modules/core/services/date/date.service';
import { OrderService } from 'src/app/modules/shared/services/order/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
})
export class OrderListComponent implements OnInit {
  public orders: Array<OrderDTO>;
  public orderFilterDTO: OrderFilterDTO;
  public statuses: Array<string>;

  constructor(
    private orderService: OrderService,
    private dateService: DateService
  ) {
    this.orders = new Array<OrderDTO>();
    this.orderFilterDTO = new OrderFilterDTO();
    let defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() - 30);
    this.orderFilterDTO.from = this.dateService.converToYMDFormat(defaultDate);
    this.statuses = EnumHelper.mapNumberEnumToStringList(OrderStatus);
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
