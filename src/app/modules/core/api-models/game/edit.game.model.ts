import { Genre } from '../genre/genre';
import { PlatformType } from '../platforms/platform.type';
import { Publisher } from '../publisher/publisher';

export class EditGameModel {
  public id: number;
  public name: string;
  public key: string;
  public description: string;
  public price: number;
  public discontinued: boolean;
  public unitsInStock: number;
  public genres: Array<Genre> | Array<number>;
  public platforms: Array<PlatformType> | Array<number>;
  public publisherId: Publisher;

  constructor() {
    this.genres = new Array<number>();
    this.platforms = new Array<number>();
    this.publisherId = new Publisher();
  }
}
