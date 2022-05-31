export class EditGameDTO {
  public id: number;
  public name: string;
  public key: string;
  public description: string;
  public price: number;
  public discontinued: boolean;
  public unitsInStock: number;
  public genres: Array<number>;
  public platforms: Array<number>;
  public publisherId: number;

  constructor() {
    this.genres = new Array<number>();
    this.platforms = new Array<number>();
  }
}
