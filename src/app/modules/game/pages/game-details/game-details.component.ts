import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameModel } from 'src/app/modules/core/api-models/game/game.model';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
import { FileService } from 'src/app/modules/shared/services/file/file.service';
import { GameService } from 'src/app/modules/shared/services/game/game.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
})
export class GameDetailsComponent implements OnInit {
  public game: GameModel;
  public key: string;
  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService,
    private fileService: FileService
  ) {
    this.key = this.route.snapshot.params['key'];
    this.game = new GameModel();
  }

  ngOnInit(): void {
    this.loadGame();
  }

  loadGame() {
    this.gameService.getGameByKey(this.key).subscribe({
      next: (data) => (this.game = data),
      error: (error) => this.errorHandler.handleError(error),
    });
  }
  downloadGame() {
    this.gameService.downloadGame(this.key).subscribe((response) => {
      this.fileService.downloadFile(this.game.name, response);
    });
  }
}
