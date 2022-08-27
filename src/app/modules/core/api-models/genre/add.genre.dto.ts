import { GenreTranslateDTO } from './genre.translate.dto';

export class AddGenreDTO {
  public name: string;
  public description: string;
  public parentGenreId: number;
  public translations: Array<GenreTranslateDTO>;
  constructor() {
    this.parentGenreId = null;
  }
}
