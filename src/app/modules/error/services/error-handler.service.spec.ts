import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ErrorHandlerService } from './error-handler.service';

describe('ErrorHandlerService', () => {
  let service: ErrorHandlerService;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ErrorHandlerService,
        { provide: Router, useValue: routerSpy },
      ],
    });
    service = TestBed.inject(ErrorHandlerService);
  });

  it('should return 400 page', () => {
    let errorResponse = new HttpErrorResponse({ error: '400', status: 400 });
    service.handleError(errorResponse);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/400']);
  });

  it('should return 500  page', () => {
    const someError = 'some error';

    let errorResponse = new HttpErrorResponse({
      error: someError,
      status: 500,
    });
    service.handleError(errorResponse);

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/500']);
  });

  it('should return 404 page', () => {
    let errorResponse = new HttpErrorResponse({
      status: 404,
    });
    service.handleError(errorResponse);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/404']);
  });
});
