import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GameDTO } from 'src/app/modules/core/api-models/game/game.dto';
import { GamePermissionService } from 'src/app/modules/core/services/permissions/game-permission/game-permission.service';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
import { FileService } from 'src/app/modules/shared/services/file/file.service';
import { GameService } from 'src/app/modules/shared/services/game/game.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
})
export class GameDetailsComponent implements OnInit {
  public game: GameDTO;
  public key: string;
  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService,
    private fileService: FileService,
    private router: Router,
    public gamePemission: GamePermissionService,
    public translateService: TranslateService
  ) {
    this.key = this.route.snapshot.params['key'];
    this.game = new GameDTO();
  }

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe((e) => {
      console.log(e);
    });
    this.loadGame();
  }

  loadGame() {
    this.gameService.getGameByKey(this.key, true).subscribe({
      next: (data) => {
        this.game = data;
      },
      error: (error) => this.errorHandler.handleError(error),
    });
  }

  downloadGame() {
    this.gameService.downloadGame(this.key).subscribe((response) => {
      this.fileService.downloadFile(this.game.name, response.body);
    });
  }

  removeGame(key: string) {
    this.gameService.deleteGame(key).subscribe({
      next: () => this.router.navigateByUrl('/games'),
      error: (error) => this.errorHandler.handleError(error),
    });
  }
}
