import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameFilterDTO } from 'src/app/modules/core/api-models/game/game.filter.dto';

import { GenreDTO } from 'src/app/modules/core/api-models/genre/genre.dto';
import { PlatformTypeDTO } from 'src/app/modules/core/api-models/platforms/platform.type.dto';
import { PublisherDTO } from 'src/app/modules/core/api-models/publisher/publisher.dto';
import { QueryHelper } from 'src/app/modules/shared/services/common/query.helper';
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
  public gameFilter: GameFilterDTO;

  @Input() params: any;

  constructor(
    private platformService: PlatformService,
    private genreService: GenreService,
    private publisherService: PublisherService,
    private router: Router
  ) {
    this.genresList = new Array<GenreDTO>();
    this.platformsList = new Array<PlatformTypeDTO>();
    this.publishersList = new Array<PublisherDTO>();
  }

  ngOnInit(): void {
    this.gameFilter = new GameFilterDTO();

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
      },
    });
  }
  loadPublishers() {
    this.publisherService.getAllPublishers().subscribe({
      next: (data) => (this.publishersList = data),
    });
  }

  getFilter() {
    console.log(this.gameFilter);
    let params = QueryHelper.removeEmptyFields(this.gameFilter);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`/games`], { queryParams: params });
    });
  }
}
