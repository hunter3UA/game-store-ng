import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MtxCheckboxGroupModule } from '@ng-matero/extensions/checkbox-group';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [],
    imports: [],
    exports: [
      MatTabsModule,
      MtxCheckboxGroupModule,
      MatCheckboxModule,
      MatSelectModule,
      MatRadioModule,
      MatDatepickerModule,
    ],
  })
  export class MaterialModule{}