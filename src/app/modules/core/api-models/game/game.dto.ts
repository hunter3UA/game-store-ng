import { GenreDTO } from '../genre/genre.dto';
import { PlatformTypeDTO } from '../platforms/platform.type.dto';
import { PublisherDTO } from '../publisher/publisher.dto';

export class GameDTO {
  public id: number;
  public name: string;
  public key: string;
  public description: string;
  public genres: Array<GenreDTO>;
  public platformTypes: Array<PlatformTypeDTO>;
  public publisher: PublisherDTO;
  public price: number;
  public discontinued: boolean;
  public unitsInStock: number;
  public publishedAt: Date;
  constructor() {
    this.genres = new Array<GenreDTO>();
    this.platformTypes = new Array<PlatformTypeDTO>();
    this.publisher = new PublisherDTO();
  }
}
