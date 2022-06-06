export class AddGameDTO {
  public name: string;
  public key: string;
  public description: string;
  public genresId: Array<number>;
  public platformsId: Array<number>;
  public publisherId?: number;
  public price: number;
  public discontinued: boolean;
  public unitsInStock: number;

  constructor() {
    this.genresId = new Array<number>();
    this.platformsId = new Array<number>();
    this.publisherId = null;
  }
}