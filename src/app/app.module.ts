import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './modules/root/components/root/root.component';
import { SharedModule } from './modules/shared/shared.module';
import { HomeComponent } from './modules/root/components/home/home.component';
import { HeaderComponent } from './modules/root/components/header/header.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CommentModule } from './modules/comment/comment.module';
import { ErrorInterceptor } from './modules/root/Interceptors/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorModule } from './modules/error/error.module';
import { DatePipe } from '@angular/common';
import { AuthInterceptor } from './modules/root/Interceptors/auth.interceptor';
import { UserModule } from './modules/user/user.module';

@NgModule({
  declarations: [RootComponent, HomeComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    SharedModule,
    ErrorModule,
    BrowserAnimationsModule,
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [RootComponent],
})
export class AppModule {}
