export class AddGenreDTO {
  public name: string;
  public parentGenreId: number;
  constructor() {
    this.parentGenreId = null;
  }
}
