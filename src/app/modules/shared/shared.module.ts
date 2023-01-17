import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MaterialModule } from './imports/material.module';
import { CustomTranslatePipe } from './pipes/translate/custom-translate.pipe';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [CustomTranslatePipe],
  imports: [CommonModule, SharedRoutingModule, HttpClientModule],
  exports: [TranslateModule, MaterialModule, CustomTranslatePipe],
})
export class SharedModule {}
