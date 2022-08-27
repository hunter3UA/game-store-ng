export class EditGameDTO {
  public id: number;
  public name: string;
  public oldGameKey: string;
  public newGameKey: string;
  public description: string;
  public price: number;
  public discontinued: boolean;
  public unitsInStock: number;
  public genresId: Array<number>;
  public platformsId: Array<number>;
  public publisherName: string;
  public publishedAt: number;
  public numberOfViews: number;
  public quantityPerUnit: string;
  public oldPublisherName: string;
  constructor() {
    this.genresId = new Array<number>();
    this.platformsId = new Array<number>();
    this.publishedAt = new Date().getDate();
  }
}
