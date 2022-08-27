import { TranslateType } from '../../common/translate.type';

export class GameTranslateDTO extends TranslateType {
  public name: string;
  public description: string;
  public quantityPerUnit: string;
}
