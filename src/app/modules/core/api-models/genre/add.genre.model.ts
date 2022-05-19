export class AddGenreModel {
  public name: string;
  public parentGenreId?: number;
  constructor() {
    this.parentGenreId = null;
  }
}
