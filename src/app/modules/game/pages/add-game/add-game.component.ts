import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddGameModel } from 'src/app/modules/core/api-models/game/add.game.model';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
import { GameService } from 'src/app/modules/shared/services/game/game.service';
import { GenreService } from 'src/app/modules/shared/services/genre/genre.service';
import { PlatformService } from 'src/app/modules/shared/services/platform/platform.service';
import { PublisherService } from 'src/app/modules/shared/services/publisher/publisher.service';
import { GameComponentModel } from '../../models/game.component.model';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
})
export class AddGameComponent implements OnInit {
  public gameComponentModel: GameComponentModel;
  public gameModel: AddGameModel;

  constructor(
    private genreService: GenreService,
    private platformService: PlatformService,
    private publisherService: PublisherService,
    private gameService: GameService,
    private router: Router,
    private errorHandler: ErrorHandlerService
  ) {
    this.gameComponentModel = new GameComponentModel();
    this.gameModel = new AddGameModel();
    this.gameModel.price = 1;
    this.gameModel.unitsInStock = 0;
  }

  ngOnInit(): void {
    this.loadGenres();
    this.loadPlatforms();
    this.loadPublishers();
  }

  loadGenres() {
    this.genreService.getAllGenres().subscribe({
      next: (data) => (this.gameComponentModel.genres = data),
      error: (error) => this.errorHandler.handleError(error),
    });
  }

  loadPlatforms() {
    this.platformService.getAllPlatforms().subscribe({
      next: (data) => (this.gameComponentModel.platforms = data),
      error: (error) => this.errorHandler.handleError(error),
    });
  }

  loadPublishers() {
    this.publisherService.getAllPublishers().subscribe({
      next: (data) => (this.gameComponentModel.publishers = data),
      error: (error) => this.errorHandler.handleError(error),
    });
  }

  addGame() {
    this.gameModel.platformsId = this.gameComponentModel.selectedPlatforms.map(
      (p) => p.id
    );
    this.gameModel.genresId = this.gameComponentModel.selectedGenres.map(
      (g) => g.id
    );
    this.gameService.addGame(this.gameModel).subscribe({
      next: () => this.router.navigate(['/games']),
      error: (error) => this.errorHandler.handleError(error),
    });
  }
}
