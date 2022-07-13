import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditGameAdapter } from 'src/app/modules/core/adapters/game.adapters/edit.game.adapter';
import { EditGameDTO } from 'src/app/modules/core/api-models/game/edit.game.dto';
import { GameDTO } from 'src/app/modules/core/api-models/game/game.dto';
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
  public gameToEdit: GameDTO;
  public gameComponentModel: GameComponentModel;
  public editedGame: EditGameDTO;

  constructor(
    private gameService: GameService,
    private platformService: PlatformService,
    private genreService: GenreService,
    private publisherService: PublisherService,
    private route: ActivatedRoute,
    private errorService: ErrorHandlerService,
    private editGameAdapter: EditGameAdapter,
    private router: Router
  ) {
    this.key = this.route.snapshot.params['key'];
    this.gameComponentModel = new GameComponentModel();
    this.gameToEdit = new GameDTO();
    this.editedGame = new EditGameDTO();
  }

  ngOnInit(): void {
    this.loadPlaftorms();
    this.loadGenres();
    this.loadGame(this.key);
    this.loadPublishers();
  }

  updateGame() {
    this.initialize();
    this.gameService.updateGame(this.editedGame).subscribe((response) => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([`/games/update/${response.key}`]);
      });
    });
  }

  loadGame(key: string) {
    this.gameService.getGameByKey(key, false).subscribe({
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

  initialize() {
    this.editedGame = this.editGameAdapter.adapt(this.gameToEdit);
    this.editedGame.publisherName =
      this.gameComponentModel.selectedPublisher.companyName;
    this.editedGame.genresId = this.gameToEdit.genres.map((g) => g.id);
    this.editedGame.platformsId = this.gameToEdit.platformTypes.map(
      (p) => p.id
    );
    this.editedGame.oldGameKey = this.key;
  }
}
