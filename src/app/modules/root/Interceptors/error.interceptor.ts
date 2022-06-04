import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ErrorHandlerService } from '../../error/services/error-handler.service';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private errorService: ErrorHandlerService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(0),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(error);
      })
    );
  }
}
