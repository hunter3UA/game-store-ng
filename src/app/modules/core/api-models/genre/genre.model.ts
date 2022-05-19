export class GenreModel {
  public id: number;
  public name: string;
  public subGenres: Array<GenreModel>;
  public parentGenreId?: number | null;
}
