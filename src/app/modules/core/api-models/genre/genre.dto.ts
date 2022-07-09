export class GenreDTO {
  public id: number;
  public name: string;
  public subGenres: Array<GenreDTO>;
  public parentGenreId: number | null;
  public categoryId: number;
}
