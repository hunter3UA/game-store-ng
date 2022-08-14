import { Injectable } from '@angular/core';
import { TokenStorageService } from 'src/app/modules/user/services/token-storage/token-storage.service';
import { GameDTO } from '../../../api-models/game/game.dto';
import { Role } from '../../../enums/role';
import { TypeOfBase } from '../../../enums/type.of.base';

@Injectable({
  providedIn: 'root',
})
export class GamePermissionService {
  constructor(private tokenService: TokenStorageService) {}

  removeGameAccess() {
    return this.tokenService.hasPermission([Role.Admin, Role.Manager]);
  }

  editGameAccess(game: GameDTO) {
    if (
      this.tokenService.hasPermission([Role.Admin, Role.Manager]) ||
      this.tokenService.hasPublisherPermission(game?.publisher?.companyName)
    )
      return true;
    return false;
  }

  commentsAccess(game: GameDTO) {
    return game.typeOfBase == TypeOfBase.GameStore;
  }
}
