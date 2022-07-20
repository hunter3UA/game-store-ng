export class GameFilterDTO {
  public name: string;
  public genres: Array<number>;
  public platforms: Array<number>;
  public publishers: Array<string>;
  public minPrice: number;
  public maxPrice: number;
  public page?: number;
  public elementsOnPage: number = 10;
  public sortingType: number = 1;
  public publishingDate: number;

  constructor() {}
}
