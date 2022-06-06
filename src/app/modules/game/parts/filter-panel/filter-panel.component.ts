import { Component, OnInit } from '@angular/core';
import { GenreDTO } from 'src/app/modules/core/api-models/genre/genre.dto';
import { PlatformTypeDTO } from 'src/app/modules/core/api-models/platforms/platform.type.dto';
import { PublisherDTO } from 'src/app/modules/core/api-models/publisher/publisher.dto';
import { GenreService } from 'src/app/modules/shared/services/genre/genre.service';
import { PlatformService } from 'src/app/modules/shared/services/platform/platform.service';
import { PublisherService } from 'src/app/modules/shared/services/publisher/publisher.service';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
})
export class FilterPanelComponent implements OnInit {
  public platformsList: Array<PlatformTypeDTO>;
  public genresList: Array<GenreDTO>;
  public publishersList: Array<PublisherDTO>;

  constructor(
    private platformService: PlatformService,
    private genreService: GenreService,
    private publisherService: PublisherService
  ) {}

  ngOnInit(): void {
    this.loadGenres();
    this.loadPlaforms();
    this.loadPublishers();
  }

  loadPlaforms() {
    this.platformService.getAllPlatforms().subscribe({
      next: (data) => (this.platformsList = data),
    });
  }

  loadGenres() {
    this.genreService.getAllGenres().subscribe({
      next: (data) => {
        this.genresList = data;
        console.log(data);
      },
    });
  }
  loadPublishers() {
    this.publisherService.getAllPublishers().subscribe({
      next: (data) => (this.publishersList = data),
    });
  }
}
