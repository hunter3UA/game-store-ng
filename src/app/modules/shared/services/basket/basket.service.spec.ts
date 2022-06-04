import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { OrderDTO } from 'src/app/modules/core/api-models/order/order.dto';
import { OrderDetailsDTO } from 'src/app/modules/core/api-models/order/oreder.details.dto';
import { environment } from 'src/environments/environment';

import { BasketService } from './basketr.service';

describe('BasketService', () => {
  let service: BasketService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasketService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BasketService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('getOrder() should return order', () => {
    service.getOrder().subscribe((response) => {
      expect(typeof response).toBe(typeof new OrderDTO());
    });

    const request = httpMock.expectOne(`${environment.apiBaseUrl}/basket`);

    expect(request.request.method).toBe('GET');

    request.flush(new OrderDTO());
  });

  it('addOrderItem(gameKey) should return orderDetails', () => {
    service.addOrderItem('my-key').subscribe((response) => {
      expect(typeof response).toBe(typeof new OrderDTO());
    });

    const request = httpMock.expectOne(
      `${environment.apiBaseUrl}/basket/games/my-key/buy`
    );

    expect(request.request.method).toBe('GET');

    request.flush(new OrderDetailsDTO());
  });

  it('removeOrderItem(itemId) should return true', () => {
    service.removeOrderItem(1).subscribe((response) => {
      expect(response).toBe(true);
    });

    const request = httpMock.expectOne(
      `${environment.apiBaseUrl}/basket/details/remove/1`
    );

    expect(request.request.method).toBe('DELETE');

    request.flush(true);
  });

  it('changeQuantity(itemId,quantity) should return orderDetails', () => {
    service.changeQuantity(1, 5).subscribe((response) => {
      expect(typeof response).toBe(typeof new OrderDetailsDTO());
    });

    const request = httpMock.expectOne(
      `${environment.apiBaseUrl}/basket/details/update`
    );

    expect(request.request.method).toBe('PUT');

    request.flush(new OrderDetailsDTO());
  });
});
