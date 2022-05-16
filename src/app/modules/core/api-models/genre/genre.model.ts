export class GenreModel {
  id: number;
  name: string;
  subGenres: Array<GenreModel>;
  parentGenreId?: number | null;
}
