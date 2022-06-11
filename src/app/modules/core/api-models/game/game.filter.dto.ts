import { SortingType } from '../../enums/sorting.type';

export class GameFilterDTO {
  public name: string;
  public genres: Array<number>;
  public platforms: Array<number>;
  public publishers: Array<number>;
  public minPrice: number;
  public maxPrice: number;
  public page?: number;
  public elementsOnPage: number;
  public sortingType: number;
  public publishingDate: number;

  constructor() {}
}
