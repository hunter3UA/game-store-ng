import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { BasketComponent } from './pages/basket/basket.component';
import { OrderComponent } from './pages/order/order.component';
import { OrderDetailsComponent } from './parts/order-details/order-details.component';
import { PaymentTypeComponent } from './parts/payment-type/payment-type.component';
import { VisaPaymentComponent } from './pages/visa-payment/visa-payment.component';

@NgModule({
  declarations: [
    BasketComponent,
    OrderComponent,
    OrderDetailsComponent,
    PaymentTypeComponent,
    VisaPaymentComponent,
  ],
  imports: [CommonModule, OrderRoutingModule],
})
export class OrderModule {}
