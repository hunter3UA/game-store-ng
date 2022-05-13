export class AddGameModel {
  public id: number;
  public name: string;
  public key: string;
  public description: string;
  public genresId: Array<number> = new Array();
  public platformsId: Array<number> = new Array();
  public publisherId: number;
  public price: number;
  public discontinued: boolean;
  public unitsInStock: number = 0;
}
