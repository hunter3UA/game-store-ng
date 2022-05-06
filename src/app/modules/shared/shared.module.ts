import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NotFoundComponent } from '../not-found/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, SharedRoutingModule, HttpClientModule],
  exports: [],
})
export class SharedModule {}
