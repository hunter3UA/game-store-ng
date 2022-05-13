import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/modules/core/api-models/game/game';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
import { GameService } from 'src/app/modules/shared/services/game/game.service';
import { GenreService } from 'src/app/modules/shared/services/genre/genre.service';
import { PlatformService } from 'src/app/modules/shared/services/platform/platform.service';
import { PublisherService } from 'src/app/modules/shared/services/publisher/publisher.service';
import { GameComponentModel } from '../../models/game.component.model';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
})
export class UpdateGameComponent implements OnInit {
  key: string;
  gameToEdit: Game;

  gameComponentModel: GameComponentModel;

  constructor(
    private gameService: GameService,
    private platformService: PlatformService,
    private genreService: GenreService,
    private publisherService: PublisherService,
    private route: ActivatedRoute,
    private errorService: ErrorHandlerService
  ) {
    this.key = this.route.snapshot.params['key'];

    this.gameComponentModel = new GameComponentModel();
    this.gameToEdit = new Game();
  }

  ngOnInit(): void {
    this.loadPlaftorms();
    this.loadGenres();
    this.loadGame();
    this.loadPublishers();
  }

  updateGame() {
    console.log(this.gameToEdit);
  }

  loadGame() {
    this.gameService.getGameByKey(this.key).subscribe({
      next: (data) => (this.gameToEdit = data),
      error: (error) => this.errorService.handleError(error),
    });
  }
  loadPlaftorms() {
    this.platformService
      .getAllPlatforms()
      .subscribe((data) => (this.gameComponentModel.platforms = data));
  }
  loadGenres() {
    this.genreService.getAllGenres().subscribe((data) => {
      this.gameComponentModel.genres = data;
    });
  }

  loadPublishers() {
    this.publisherService.getAllPublishers().subscribe((data) => {
      this.gameComponentModel.publishers = data;
    });
  }
}
