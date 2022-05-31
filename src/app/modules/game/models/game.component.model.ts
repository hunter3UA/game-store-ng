import { GenreDTO } from '../../core/api-models/genre/genre.dto';
import { PlatformTypeDTO } from '../../core/api-models/platforms/platform.type.dto';
import { PublisherDTO } from '../../core/api-models/publisher/publisher.dto';

export class GameComponentModel {
  public genres: Array<GenreDTO>;
  public platforms: Array<PlatformTypeDTO>;
  public publishers: Array<any>;
  public selectedGenres: Array<any>;
  public selectedPlatforms: Array<any>;
  public selectedPublisher: PublisherDTO;
  constructor() {
    this.genres = new Array<GenreDTO>();
    this.platforms = new Array<PlatformTypeDTO>();
    this.selectedGenres = new Array<any>();
    this.selectedPlatforms = Array<any>();
    this.selectedPublisher = new PublisherDTO();
  }
}
