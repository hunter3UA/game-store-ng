import { Genre } from '../../core/api-models/genre/genre';
import { PlatformType } from '../../core/api-models/platforms/platform.type';
import { Publisher } from '../../core/api-models/publisher/publisher';

export class GameComponentModel {
  constructor() {
    this.genres = new Array<Genre>();
    this.platforms = new Array<PlatformType>();
    this.selectedGenres = new Array<any>();
    this.selectedPlatforms = Array<any>();
    this.selectedPublisher = new Publisher();
  }
  genres: Array<Genre>;
  platforms: Array<PlatformType>;
  publishers: Array<any>;
  selectedGenres: Array<any>;
  selectedPlatforms: Array<any>;
  selectedPublisher: Publisher;
}
