import { TranslateType } from '../../common/translate.type';

export class GenreTranslateDTO extends TranslateType {
  public id: number;
  public genreId: number;
  public name: string;
  public description: string;
}
