import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
})
export class RootComponent {
  constructor(private translateService: TranslateService) {
    this.translateService.use('en');
  }
}
