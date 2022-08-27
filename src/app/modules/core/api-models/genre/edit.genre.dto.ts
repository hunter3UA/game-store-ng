import { GenreTranslateDTO } from './genre.translate.dto';

export class EditGenreDTO {
  public id: number;
  public name: string;
  public translations: Array<GenreTranslateDTO>;
}
