import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { BasketComponent } from './pages/basket/basket.component';
import { OrderComponent } from './pages/order/order.component';
import { PaymentTypeComponent } from './parts/payment-type/payment-type.component';
import { VisaPaymentComponent } from './pages/visa-payment/visa-payment.component';
import { IboxPaymentComponent } from './pages/ibox-payment/ibox-payment.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { FormsModule } from '@angular/forms';
import { ShipperDetailsComponent } from './pages/shipper-details/shipper-details.component';

@NgModule({
  declarations: [
    BasketComponent,
    OrderComponent,
    PaymentTypeComponent,
    VisaPaymentComponent,
    IboxPaymentComponent,
    OrderHistoryComponent,
    ShipperDetailsComponent,
  ],
  imports: [CommonModule, OrderRoutingModule, FormsModule],
})
export class OrderModule {}
