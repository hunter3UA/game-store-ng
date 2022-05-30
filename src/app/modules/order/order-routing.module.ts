import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './pages/basket/basket.component';
import { IboxPaymentComponent } from './pages/ibox-payment/ibox-payment.component';
import { OrderComponent } from './pages/order/order.component';
import { VisaPaymentComponent } from './pages/visa-payment/visa-payment.component';

const routes: Routes = [
  { path: 'basket', component: BasketComponent },
  { path: 'order', component: OrderComponent },
  { path: 'visa', component: VisaPaymentComponent },
  { path: 'ibox', component: IboxPaymentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
