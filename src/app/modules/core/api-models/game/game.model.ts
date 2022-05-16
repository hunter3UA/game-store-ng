import { GenreModel } from '../genre/genre.model';
import { PlatformTypeModel } from '../platforms/platform.type.model';
import { PublisherModel } from '../publisher/publisher.model';

export class GameModelModel {
  public id: number;
  public name: string;
  public key: string;
  public description: string;
  public genres: Array<GenreModel>;
  public platformTypes: Array<PlatformTypeModel>;
  public publisher: PublisherModel;
  public price: number;
  public discontinued: boolean;
  public unitsInStock: number;
  constructor() {
    this.genres = new Array<GenreModel>();
    this.platformTypes = new Array<PlatformTypeModel>();
    this.publisher = new PublisherModel();
  }
}
