import {
  Component,
  Input,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { AddGameModel } from 'src/app/modules/shared/models/api-models/add.game.model';
import { GameService } from 'src/app/modules/shared/services/game/game.service';

import { GenreService } from 'src/app/modules/shared/services/genre/genre.service';
import { PlatformService } from 'src/app/modules/shared/services/platform/platform.service';
import { PublisherService } from 'src/app/modules/shared/services/publisher/publisher.service';
import { GameComponentModel } from '../../models/GameComponentModel';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
})
export class AddGameComponent implements OnInit {
  gameComponentModel: GameComponentModel;

  gameModel: AddGameModel;

  constructor(
    private genreService: GenreService,
    private platformService: PlatformService,
    private publisherService: PublisherService,
    private gameService: GameService,
    private router: Router
  ) {
    this.gameComponentModel = new GameComponentModel();
    this.gameModel = new AddGameModel();
  }

  ngOnInit(): void {
    this.loadGenres();
    this.loadPlatforms();
    this.loadPublishers();
  }

  onSelectGenres(event) {
    console.log(event.id);
  }

  loadGenres() {
    this.genreService.getAllGenres().subscribe(
      (data) => {
        if (data) {
          this.gameComponentModel.genres = data;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  loadPlatforms() {
    this.platformService.getAllPlatforms().subscribe(
      (data) => {
        if (data) {
          this.gameComponentModel.platforms = data;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  loadPublishers() {
    this.publisherService.getAllPublishers().subscribe(
      (data) => {
        if (data) {
          this.gameComponentModel.publishers = data;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addGame() {
    for (let genre of this.gameComponentModel.selectedGenres) {
      this.gameModel.genresId.push(genre.id);
    }

    for (let platform of this.gameComponentModel.selectedPlatforms) {
      this.gameModel.platformsId.push(platform.id);
    }
    this.gameService.addGame(this.gameModel).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/games/all']);
      },
      (error) => console.log(error)
    );
  }
}
