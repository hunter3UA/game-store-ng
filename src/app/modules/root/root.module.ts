import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './components/root/root.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RootComponent,

  ],
  imports: [
    CommonModule,
    RootRoutingModule,
    SharedModule
  ]
})
export class RootModule { }
