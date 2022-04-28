import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './modules/root/components/root/root.component';
import { SharedModule } from './modules/shared/shared.module';
import { HomeComponent } from './modules/root/components/home/home.component';
import { HeaderComponent } from './modules/root/components/header/header.component';
import { GameModule } from './modules/game/game.module';



@NgModule({
  declarations: [
    RootComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,  
    SharedModule,
    GameModule
  ],
  exports:[],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
