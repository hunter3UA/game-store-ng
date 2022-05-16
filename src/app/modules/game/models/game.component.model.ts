import { GenreModel } from '../../core/api-models/genre/genre.model';
import { PlatformTypeModel } from '../../core/api-models/platforms/platform.type.model';
import { PublisherModel } from '../../core/api-models/publisher/publisher.model';

export class GameComponentModel {
  constructor() {
    this.genres = new Array<GenreModel>();
    this.platforms = new Array<PlatformTypeModel>();
    this.selectedGenres = new Array<any>();
    this.selectedPlatforms = Array<any>();
    this.selectedPublisher = new PublisherModel();
  }
  genres: Array<GenreModel>;
  platforms: Array<PlatformTypeModel>;
  publishers: Array<any>;
  selectedGenres: Array<any>;
  selectedPlatforms: Array<any>;
  selectedPublisher: PublisherModel;
}
