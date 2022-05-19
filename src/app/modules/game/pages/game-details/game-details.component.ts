import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameModelModel } from 'src/app/modules/core/api-models/game/game.model';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
import { GameService } from 'src/app/modules/shared/services/game/game.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
})
export class GameDetailsComponent implements OnInit {
  public game: GameModelModel;
  public key: string;
  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) {
    this.key = this.route.snapshot.params['key'];
    this.game = new GameModelModel();
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
      let fileName = response.headers.get('content-disposition');
      let blob: Blob = response.body as Blob;
      let a = document.createElement('a');
      a.download = fileName;
      a.href = window.URL.createObjectURL(blob);
      a.click();
    });
  }
}
