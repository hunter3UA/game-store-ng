import { Genre } from '../genre/genre';
import { PlatformType } from '../platforms/platform.type';
import { Publisher } from '../publisher/publisher';

export class Game {
  public id: number;
  public name: string;
  public key: string;
  public description: string;
  public genres: Array<Genre>;
  public platformTypes: Array<PlatformType>;
  public publisher: Publisher;
  public price: number;
  public discontinued: boolean;
  public unitsInStock: number;
  constructor() {
    this.genres = new Array<Genre>();
    this.platformTypes = new Array<PlatformType>();
    this.publisher = new Publisher();
  }
}
