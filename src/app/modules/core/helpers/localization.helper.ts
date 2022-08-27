import { TranslateType } from '../common/translate.type';
import { Language } from '../enums/language';
import { EnumHelper } from './enum.helper';

export class LocalizationHelper {
  public static initialize<T extends TranslateType>(type: new () => T): Array<T> {
    var languages = EnumHelper.mapNumberEnumToStringList(Language);
    let array = new Array<T>();
    languages.forEach((l) => {
      let newLang = new type();
      newLang.lang = l;
      array.push(newLang);
    });
    return array;
  }
  public static fillLanguages<T>():Array<T>{
    return null;
  }
}
