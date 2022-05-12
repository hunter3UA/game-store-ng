import { Genre } from '../../core/api-models/genre/genre';
import { PlatformType } from '../../core/api-models/platforms/platform.type';

export class GameComponentModel {
  genres: Array<Genre>;
  platforms: Array<PlatformType>;
  publishers: Array<any>;
  selectedGenres: Array<any>;
  selectedPlatforms: Array<any>;
}
