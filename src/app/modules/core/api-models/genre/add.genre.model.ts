export class AddGenreModel {
  name: string;
  parentGenreId?: number;
  constructor() {
    this.parentGenreId = null;
  }
}
