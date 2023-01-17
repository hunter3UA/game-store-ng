import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../../../core/enums/language';

@Pipe({
  name: 'customTranslate',
})
export class CustomTranslatePipe implements PipeTransform {
  constructor(public translate: TranslateService) {}
  transform(value: string, name: string, object: any): string {
    if (this.translate.currentLang == 'en') return value;
    else {
      if (object.translations) {
        object.translations.forEach((el) => {
          if (el.language == this.translate.currentLang && el[name]) {
            value = el[name];
          }
        });
      }
    }
    return value;
  }
}
