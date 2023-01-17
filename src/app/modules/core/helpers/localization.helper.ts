import { TranslateType } from '../common/translate.type';
import { Language } from '../enums/language';
import { EnumHelper } from './enum.helper';

export class LocalizationHelper {
  public static initialize<T extends TranslateType>(
    type: new () => T
  ): Array<T> {
    var languages = EnumHelper.mapNumberEnumToStringList(Language);
    let array = new Array<T>();
    languages.forEach((l) => {
      let newLang = new type();
      newLang.language = l;
      array.push(newLang);
    });
    return array;
  }
  public static fillLanguages<T extends TranslateType>(
    array: Array<T>,
    type: new () => T
  ): Array<T> {
    var languages = EnumHelper.mapNumberEnumToStringList(Language);
    if (!array) array = new Array<T>();
    languages.forEach((el) => {
      var res = array.find((a) => a.language == el);
      if (!res) {
        let newLanguage = new type();
        newLanguage.language = el;
        array.push(newLanguage);
      }
    });

    return array;
  }
}
