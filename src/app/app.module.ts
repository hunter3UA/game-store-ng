import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './modules/root/components/root/root.component';
import { RootModule } from './modules/root/root.module';


@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RootModule
  
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
