import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameFilterDTO } from 'src/app/modules/core/api-models/game/game.filter.dto';
import { GenreDTO } from 'src/app/modules/core/api-models/genre/genre.dto';
import { PlatformTypeDTO } from 'src/app/modules/core/api-models/platforms/platform.type.dto';
import { PublisherDTO } from 'src/app/modules/core/api-models/publisher/publisher.dto';
import { SelectListItem } from 'src/app/modules/core/common/select.list.item';
import { SortingType } from 'src/app/modules/core/enums/sorting.type';
import { ElementsOnPageModel } from 'src/app/modules/core/common/elements.on.page.model';
import { GenreService } from 'src/app/modules/shared/services/genre/genre.service';
import { PlatformService } from 'src/app/modules/shared/services/platform/platform.service';
import { PublisherService } from 'src/app/modules/shared/services/publisher/publisher.service';
import { PublishingDate } from 'src/app/modules/core/enums/publishing.date';
import { QueryService } from 'src/app/modules/shared/services/common/query/query.service';
import { GameFilterHelper } from '../../helpers/game.filter.helper';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
})
export class FilterPanelComponent implements OnInit, OnChanges {
  public platformsList: Array<any>;
  public genresList: Array<GenreDTO>;
  public publishersList: Array<PublisherDTO>;
  public gameFilter: GameFilterDTO;
  public elementsOnPage: Array<SelectListItem>;
  public sotringValues: Array<SelectListItem>;
  public publishedAt: Array<SelectListItem>;
  public startGameFilter: GameFilterDTO;

  @Input() maxGameCount: number;

  constructor(
    private platformService: PlatformService,
    private genreService: GenreService,
    private publisherService: PublisherService,
    private router: Router,
    private route: ActivatedRoute,
    private queryService: QueryService
  ) {
    this.genresList = new Array<GenreDTO>();
    this.platformsList = new Array<PlatformTypeDTO>();
    this.publishersList = new Array<PublisherDTO>();
    this.publishedAt = new Array<SelectListItem>();
    this.gameFilter = new GameFilterDTO();
    this.initializeDdlLists();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.maxGameCount) {
      this.maxGameCount = changes['maxGameCount'].currentValue;
      this.elementsOnPage.push(new SelectListItem('All', this.maxGameCount));
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.gameFilter =
        GameFilterHelper.parseParamsObjectToFilterObject(params);
      this.startGameFilter =
        GameFilterHelper.parseParamsObjectToFilterObject(params);
    });
    this.loadGenres();
    this.loadPlaforms();
    this.loadPublishers();
    this.elementsOnPage = ElementsOnPageModel.getElements();
  }

  initializeDdlLists() {
    this.sotringValues = Object.entries(SortingType)
      .slice(5, 10)
      .map(([key, value]) => {
        return new SelectListItem(key, value);
      });
    this.publishedAt.push(new SelectListItem('None'));
    Object.entries(PublishingDate)
      .slice(5, 10)
      .map(([key, value]) => {
        this.publishedAt.push(new SelectListItem(key, value));
      });
  }

  loadPlaforms() {
    this.platformService.getAllPlatforms().pipe();
    this.platformService.getAllPlatforms().subscribe({
      next: (data) => {
        this.platformsList = data;
      },
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

  sort() {
    this.gameFilter.page = 1;
    this.getFilter();
  }

  getFilter() {
    this.gameFilter = this.queryService.removeEmptyFields(this.gameFilter);
    console.log(this.gameFilter);
    if (
      JSON.stringify(this.gameFilter) !== JSON.stringify(this.startGameFilter)
    ) {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([`/games`], { queryParams: this.gameFilter });
      });
    }
  }

  resetFilter() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`/games`], {
        queryParams: {
          sortingType: this.gameFilter.sortingType,
        },
      });
    });
  }
}
