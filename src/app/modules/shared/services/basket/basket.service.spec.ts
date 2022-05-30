import { TestBed } from '@angular/core/testing';

import { BasketService } from './basketr.service';

describe('OrderService', () => {
  let service: BasketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasketService);
  });
});
