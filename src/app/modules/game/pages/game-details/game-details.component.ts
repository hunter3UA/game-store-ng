import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameDTO } from 'src/app/modules/core/api-models/game/game.dto';
import { Role } from 'src/app/modules/core/enums/role';
import { TypeOfBase } from 'src/app/modules/core/enums/type.of.base';
import { GamePermissionService } from 'src/app/modules/core/services/permissions/game-permission/game-permission.service';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
import { FileService } from 'src/app/modules/shared/services/file/file.service';
import { GameService } from 'src/app/modules/shared/services/game/game.service';
import { TokenStorageService } from 'src/app/modules/user/services/token-storage/token-storage.service';

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
    private tokenService: TokenStorageService,
    private router: Router,
    public gamePemission: GamePermissionService
  ) {
    this.key = this.route.snapshot.params['key'];
    this.game = new GameDTO();
  }

  ngOnInit(): void {
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
  hasEditAccess() {
    if (
      this.tokenService.hasPermission([Role.Admin, Role.Manager]) ||
      this.tokenService.hasPublisherPermission(
        this.game?.publisher?.companyName
      )
    )
      return true;
    return false;
  }

  hasCommentsAccess() {
    return this.game.typeOfBase == TypeOfBase.GameStore;
  }

  removeGame(key: string) {
    this.gameService.deleteGame(key).subscribe({
      next: () => this.router.navigateByUrl('/games'),
      error: (error) => this.errorHandler.handleError(error),
    });
  }

  hasRemoveAccess() {
    return this.tokenService.hasPermission([Role.Admin, Role.Manager]);
  }
}
