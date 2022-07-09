export class EditGameDTO {
  public id: number;
  public name: string;
  public key: string;
  public description: string;
  public price: number;
  public discontinued: boolean;
  public unitsInStock: number;
  public genresId: Array<number>;
  public platformsId: Array<number>;
  public publisherName: string;
  public publishedAt: Date;
  public numberOfViews: number;
  public quantityPerUnit: string;
  constructor() {
    this.genresId = new Array<number>();
    this.platformsId = new Array<number>();
    this.publishedAt = new Date();
  }
}
