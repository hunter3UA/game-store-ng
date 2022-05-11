import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/modules/core/api-models/game/game';
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
  gameToEdit: any = {};

  gameComponentModel: GameComponentModel;

  constructor(
    private gameService: GameService,
    private platformService: PlatformService,
    private genreService: GenreService,
    private publisherService: PublisherService,
    private route: ActivatedRoute
  ) {
    this.key = this.route.snapshot.params['key'];

    this.gameComponentModel = new GameComponentModel();
  }

  ngOnInit(): void {
    this.loadGame();
    this.loadPlaftorms();
    this.loadGenres();
    this.loadPublishers();
  }

  loadGame() {
    this.gameService.getGameByKey(this.key).subscribe((data) => {
      if (data) {
        this.gameToEdit = data;
        console.log(this.gameToEdit);
      }
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
