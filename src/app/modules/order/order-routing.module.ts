import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Role } from '../core/enums/role';
import { AuthGuard } from '../root/guards/auth/auth.guard';
import { RoleGuard } from '../root/guards/role/role.guard';
import { BasketComponent } from './pages/basket/basket.component';
import { IboxPaymentComponent } from './pages/ibox-payment/ibox-payment.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { OrderComponent } from './pages/order/order.component';
import { ShipperDetailsComponent } from './pages/shipper-details/shipper-details.component';
import { VisaPaymentComponent } from './pages/visa-payment/visa-payment.component';

const routes: Routes = [
  { path: 'basket', component: BasketComponent },
  { path: 'order', component: OrderComponent },
  { path: 'visa', component: VisaPaymentComponent },
  { path: 'ibox', component: IboxPaymentComponent },
  {
    path: 'orders/history',
    component: OrderHistoryComponent,
    // canActivate: [AuthGuard, RoleGuard],
    // data: { roles: [Role.Manager] },
  },
  {
    path: 'orders',
    component: OrderListComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: [Role.Manager] },
  },
  { path: 'shipper-details', component: ShipperDetailsComponent },
  { path: 'order-details/:id', component: OrderDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
