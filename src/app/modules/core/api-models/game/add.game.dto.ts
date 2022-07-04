export class AddGameDTO {
  public name: string;
  public key: string;
  public description: string;
  public genresId: Array<number>;
  public platformsId: Array<number>;
  public publisherName: string;
  public price: number;
  public discontinued: boolean;
  public unitsInStock: number;
  public publishedAt: Date;
  public date: Date;
  constructor() {
    this.genresId = new Array<number>();
    this.platformsId = new Array<number>();
    this.publisherName = null;
  }
}
