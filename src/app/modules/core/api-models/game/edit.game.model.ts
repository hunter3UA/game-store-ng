export class EditGameModel {
  public id: number;
  public name: string;
  public key: string;
  public description: string;
  public price: number;
  public discontinued: boolean;
  public unitsInStock: number;
  public genresId: Array<number> = new Array();
  public platformsId: Array<number> = new Array();
}
