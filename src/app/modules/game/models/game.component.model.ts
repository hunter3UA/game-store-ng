import { GenreModel } from '../../core/api-models/genre/genre.model';
import { PlatformTypeModel } from '../../core/api-models/platforms/platform.type.model';
import { PublisherModel } from '../../core/api-models/publisher/publisher.model';

export class GameComponentModel {
  public genres: Array<GenreModel>;
  public platforms: Array<PlatformTypeModel>;
  public publishers: Array<any>;
  public selectedGenres: Array<any>;
  public selectedPlatforms: Array<any>;
  public selectedPublisher: PublisherModel;
  constructor() {
    this.genres = new Array<GenreModel>();
    this.platforms = new Array<PlatformTypeModel>();
    this.selectedGenres = new Array<any>();
    this.selectedPlatforms = Array<any>();
    this.selectedPublisher = new PublisherModel();
  }
}
