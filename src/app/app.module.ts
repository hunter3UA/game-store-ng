import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './modules/root/components/root/root.component';
import { SharedModule } from './modules/shared/shared.module';
import { HomeComponent } from './modules/root/components/home/home.component';
import { HeaderComponent } from './modules/root/components/header/header.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CommentModule } from './modules/comment/comment.module';
import { NotFoundModule } from './modules/not-found/not-found.module';

@NgModule({
  declarations: [RootComponent, HomeComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommentModule,
    NgMultiSelectDropDownModule.forRoot(),
    SharedModule,
    NotFoundModule,
  ],
  exports: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [RootComponent],
})
export class AppModule {}
