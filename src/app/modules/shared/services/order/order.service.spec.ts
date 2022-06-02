import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { OrderDTO } from 'src/app/modules/core/api-models/order/order.dto';
import { OrderPaymentDTO } from 'src/app/modules/core/api-models/order/order.payment.dto';
import { PaymentType } from 'src/app/modules/core/enums/payment.type';
import { environment } from 'src/environments/environment';

import { OrderService } from './order.service';

describe('OrderService', () => {
  let service: OrderService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(OrderService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('getOrder() should return order', () => {
    service.getOrder().subscribe((response) => {
      expect(typeof response).toBe(typeof new OrderDTO());
    });

    const request = httpMock.expectOne(`${environment.apiBaseUrl}/order`);

    expect(request.request.method).toBe('GET');

    request.flush(new OrderDTO());
  });

  it('cancelOrder(orderId) should return true', () => {
    service.cancelOrder(1).subscribe((response) => {
      expect(response).toBe(true);
    });

    const request = httpMock.expectOne(`${environment.apiBaseUrl}/orders/1`);

    expect(request.request.method).toBe('DELETE');

    request.flush(true);
  });

  it('makeOrder(orderId) should return order', () => {
    service.makeOrder(1).subscribe((response) => {
      expect(typeof response).toBe(typeof new OrderDTO());
    });

    const request = httpMock.expectOne(`${environment.apiBaseUrl}/orders/1`);

    expect(request.request.method).toBe('GET');

    request.flush(new OrderDTO());
  });

  it('generateInvoiceFile(orderPaymentDTO)  should return Observable', () => {
    service
      .generateInvoiceFile({
        orderId: 1,
        paymentType: PaymentType.BankPayment,
      })
      .subscribe((response) => {
        expect(response).not.toBeNull();
      });

    const request = httpMock.expectOne(`${environment.apiBaseUrl}/orders/pay`);

    expect(request.request.method).toBe('POST');
    request.flush(new Blob());
  });
});
