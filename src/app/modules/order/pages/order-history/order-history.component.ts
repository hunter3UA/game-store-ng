import { Component, OnInit } from '@angular/core';
import { OrderDTO } from 'src/app/modules/core/api-models/order/order.dto';
import { OrderHistoryDTO } from 'src/app/modules/core/api-models/order/order.history.dto';
import { OrderService } from 'src/app/modules/shared/services/order/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
})
export class OrderHistoryComponent implements OnInit {
  public orders: Array<OrderDTO>;
  public orderHistory: OrderHistoryDTO;

  constructor(private orderService: OrderService) {
    this.orders = new Array<OrderDTO>();
    this.orderHistory = new OrderHistoryDTO();
  }

  ngOnInit(): void {
    this.loadOrders(this.orderHistory);
  }

  loadOrders(orderHistory: OrderHistoryDTO) {
    this.orderService.getOrders(orderHistory).subscribe({
      next: (data) => {
        this.orders = data;
      },
    });
  }
}
