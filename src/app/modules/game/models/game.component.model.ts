import { Genre } from '../../core/api-models/genre/genre';
import { PlatformType } from '../../core/api-models/platforms/platform.type';

export class GameComponentModel {
  constructor() {
    this.genres = new Array<Genre>();
    this.platforms = new Array<PlatformType>();
    this.selectedGenres = new Array<number>();
    this.selectedPlatforms = Array<number>();
  }
  genres: Array<Genre>;
  platforms: Array<PlatformType>;
  publishers: Array<any>;
  selectedGenres: Array<any>;
  selectedPlatforms: Array<any>;
}
