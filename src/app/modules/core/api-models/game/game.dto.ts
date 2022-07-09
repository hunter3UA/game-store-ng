import { TypeOfBase } from '../../enums/type.of.base';
import { GenreDTO } from '../genre/genre.dto';
import { PlatformTypeDTO } from '../platforms/platform.type.dto';
import { PublisherDTO } from '../publisher/publisher.dto';

export class GameDTO {
  public id: number | string;
  public name: string;
  public key: string;
  public description: string;
  public genres: Array<GenreDTO>;
  public platformTypes: Array<PlatformTypeDTO>;
  public publisher: PublisherDTO;
  public price: number;
  public discontinued: boolean;
  public unitsInStock: number;
  public publishedAt: string;
  public quantityPerUnit: string;
  public reorderLevel: number;
  public numberOfViews: number;
  public typeOfBase: TypeOfBase;
  constructor() {
    this.genres = new Array<GenreDTO>();
    this.platformTypes = new Array<PlatformTypeDTO>();
    this.publisher = new PublisherDTO();
  }
}
