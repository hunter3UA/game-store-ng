import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { NotFoundErrorComponent } from './pages/not-found-error/not-found-error.component';
import { BadRequestErrorComponent } from './pages/bad-request-error/bad-request-error.component';
import { InternalServerErrorComponent } from './pages/internal-server-error/internal-server-error.component';


@NgModule({
  declarations: [
    NotFoundErrorComponent,
    BadRequestErrorComponent,
    InternalServerErrorComponent
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule { }
