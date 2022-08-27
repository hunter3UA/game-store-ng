import { GenreTranslateDTO } from './genre.translate.dto';

export class GenreDTO {
  public id: number;
  public name: string;
  public subGenres: Array<GenreDTO>;
  public parentGenreId: number | null;
  public categoryId: number;
  public translations: Array<GenreTranslateDTO>;
}
