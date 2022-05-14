export class AddGameModel {
  public id: number;
  public name: string;
  public key: string;
  public description: string;
  public genresId: Array<number> = new Array();
  public platformsId: Array<number> = new Array();
  public publisherId?: number;
  public price: number;
  public discontinued: boolean;
  public unitsInStock: number;

  constructor() {
    this.publisherId = null;
    this.price = 1;
    this.unitsInStock = 0;
  }
}
