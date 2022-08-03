import { Component, OnInit } from '@angular/core';
import { OrderDTO } from 'src/app/modules/core/api-models/order/order.dto';
import { OrderFilterDTO } from 'src/app/modules/core/api-models/order/order.history.dto';
import { OrderStatus } from 'src/app/modules/core/enums/order.status';
import { OrderService } from 'src/app/modules/shared/services/order/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
})
export class OrderHistoryComponent implements OnInit {
  public orders: Array<OrderDTO>;
  public orderHistory: OrderFilterDTO;
  public statuses: any;

  constructor(private orderService: OrderService) {
    this.orders = new Array<OrderDTO>();
    this.orderHistory = new OrderFilterDTO();
    this.statuses = new Array<string>('');
    Object.entries(OrderStatus)
      .slice(4, 8)
      .map(([key]) => {
        this.statuses.push(key);
      });
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
