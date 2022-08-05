import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDTO } from 'src/app/modules/core/api-models/order/order.dto';
import { ShipperDTO } from 'src/app/modules/core/api-models/shipper/shipper.dto';
import { OrderService } from 'src/app/modules/shared/services/order/order.service';
import { ShipperService } from 'src/app/modules/shared/services/shipper/shipper.service';

@Component({
  selector: 'app-shipper-details',
  templateUrl: './shipper-details.component.html',
})
export class ShipperDetailsComponent implements OnInit {
  public currentOrder: OrderDTO;
  public shippers: Array<ShipperDTO>;
  constructor(
    private shipperService: ShipperService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.currentOrder = new OrderDTO();
  }

  ngOnInit(): void {
    this.loadOrder();
    this.loadShippers();
  }

  loadShippers() {
    this.shipperService.getListOfShippers().subscribe({
      next: (data) => {
        this.shippers = data;
      },
    });
  }

  loadOrder() {
    this.orderService.getOrderByCustomer().subscribe({
      next: (data) => {
        this.currentOrder = data;
      },
      error: () => this.router.navigate(['/basket']),
    });
  }

  confirmShipper() {
    this.orderService.updateOrder(this.currentOrder).subscribe({
      next: () => this.router.navigate(['/order']),
    });
  }

  cancelOrder() {
    this.orderService.cancelOrder(this.currentOrder.id).subscribe({
      next: () => this.router.navigate(['/basket']),
    });
  }
}
