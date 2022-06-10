import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameDTO } from 'src/app/modules/core/api-models/game/game.dto';
import { ItemPageDTO } from 'src/app/modules/core/common/item.page.dto';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
import { BasketService } from 'src/app/modules/shared/services/basket/basketr.service';
import { QueryHelper } from 'src/app/modules/shared/services/common/query.helper';
import { GameService } from '../../../shared/services/game/game.service';

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
    private errorHandler: ErrorHandlerService
  ) {
    this.gamePage = new ItemPageDTO<GameDTO>();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.params = params;
      this.params = QueryHelper.parseParamsObjectToFilterObject(this.params);
      console.log('Object', this.params);
      this.params = QueryHelper.parseObjectToQueryString(this.params);
      console.log('Query', this.params);
      this.loadAllGames(this.params);
    });
  }

  loadAllGames(params) {
    this.gameService.getAllGames(params).subscribe({
      next: (data) => {
        this.gamePage = data;
      },
      error: (error) => this.errorHandler.handleError(error),
    });
  }

  removeGame(id: number) {
    // this.gameService.deleteGame(id).subscribe({
    //   next: () => this.loadAllGames(),
    //   error: (error) => this.errorHandler.handleError(error),
    // });
  }

  addOrderItem(gameKey: string) {
    this.basketService.addOrderItem(gameKey).subscribe({
      next: () => this.router.navigate(['/basket']),
      error: () => this.router.navigate(['/basket']),
    });
  }
}
