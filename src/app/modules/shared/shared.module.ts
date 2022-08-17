import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedRoutingModule, HttpClientModule],
  exports: [],
})
export class SharedModule {}
