import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDTO } from 'src/app/modules/core/api-models/order/order.dto';
import { ShipperDTO } from 'src/app/modules/core/api-models/shipper/shipper.dto';
import { OrderService } from 'src/app/modules/shared/services/order/order.service';
import { ShipperService } from 'src/app/modules/shared/services/shipper/shipper.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {
  public currentOrder: OrderDTO;
  public shippers: Array<ShipperDTO>;
  constructor(
    private router: Router,
    private orderService: OrderService,
    private shipperService: ShipperService
  ) {
    this.currentOrder = new OrderDTO();
    this.shippers = new Array<ShipperDTO>();
  }

  ngOnInit(): void {
    this.loadOrder();
    this.loadShippers();
  }

  loadOrder() {
    this.orderService.getOrderByCustomer().subscribe({
      next: (data) => {
        this.currentOrder = data;
      },
      error: () => this.router.navigate(['/basket']),
    });
  }

  loadShippers() {
    this.shipperService.getListOfShippers().subscribe({
      next: (data) => {
        this.shippers = data;
      },
    });
  }

  cancelOrder() {
    this.orderService.cancelOrder(this.currentOrder.id).subscribe({
      next: () => this.router.navigate(['/basket']),
    });
  }
}
