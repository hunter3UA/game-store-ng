import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameDTO } from 'src/app/modules/core/api-models/game/game.dto';
import { ItemPageDTO } from 'src/app/modules/core/common/item.page.dto';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
import { BasketService } from 'src/app/modules/shared/services/basket/basketr.service';
import { QueryService } from 'src/app/modules/shared/services/common/query/query.service';
import { GameService } from '../../../shared/services/game/game.service';
import { GameFilterHelper } from '../../helpers/game.filter.helper';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
})
export class AllGamesComponent implements OnInit {
  public gamePage: ItemPageDTO<GameDTO>;
  public params: any;

  constructor(
    private gameService: GameService,
    private router: Router,
    private basketService: BasketService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService,
    private queryService: QueryService
  ) {
    this.gamePage = new ItemPageDTO<GameDTO>();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.params = params;
      this.params = GameFilterHelper.parseParamsObjectToFilterObject(
        this.params
      );
      this.params = this.queryService.parseObjectToQueryString(this.params);
      this.loadAllGames(this.params);
    });
  }

  loadAllGames(params: string) {
    this.gameService.getAllGames(params).subscribe({
      next: (data) => {
        this.gamePage = data;
      },
      error: (error) => this.errorHandler.handleError(error),
    });
  }

  removeGame(id: number) {
    this.gameService.deleteGame(id).subscribe({
      next: () => this.loadAllGames(this.params),
      error: (error) => this.errorHandler.handleError(error),
    });
  }

  addOrderItem(gameKey: string) {
    this.basketService.addOrderItem(gameKey).subscribe({
      next: () => this.router.navigate(['/basket']),
      error: () => this.router.navigate(['/basket']),
    });
  }
}
