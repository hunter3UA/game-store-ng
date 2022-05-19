import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditGameAdapter } from 'src/app/modules/core/adapters/game.adapters/edit.game.adapter';
import { EditGameModel } from 'src/app/modules/core/api-models/game/edit.game.model';
import { GameModelModel } from 'src/app/modules/core/api-models/game/game.model';
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
  public key: string;
  public gameToEdit: GameModelModel;
  public gameComponentModel: GameComponentModel;
  public editedGame: EditGameModel;

  constructor(
    private gameService: GameService,
    private platformService: PlatformService,
    private genreService: GenreService,
    private publisherService: PublisherService,
    private route: ActivatedRoute,
    private errorService: ErrorHandlerService,
    private editGameAdapter: EditGameAdapter
  ) {
    this.key = this.route.snapshot.params['key'];
    this.gameComponentModel = new GameComponentModel();
    this.gameToEdit = new GameModelModel();
    this.editedGame = new EditGameModel();
  }

  ngOnInit(): void {
    this.loadPlaftorms();
    this.loadGenres();
    this.loadGame();
    this.loadPublishers();
  }

  updateGame() {
    this.editedGame = this.editGameAdapter.adapt(this.gameToEdit);
    this.editedGame.publisherId = this.gameComponentModel.selectedPublisher.id;
    this.editedGame.genres = this.gameToEdit.genres.map((g) => g.id);
    this.editedGame.platforms = this.gameToEdit.platformTypes.map((p) => p.id);
    this.gameService.updateGame(this.editedGame).subscribe(() => {
      this.loadGame();
    });
  }

  loadGame() {
    this.gameService.getGameByKey(this.key).subscribe({
      next: (data) => {
        this.gameToEdit = data;
        if (this.gameToEdit.publisher) {
          this.gameComponentModel.selectedPublisher = this.gameToEdit.publisher;
        } else {
          this.gameComponentModel.selectedPublisher.id = null;
        }
      },
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
