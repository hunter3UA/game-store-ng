import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameDTO } from 'src/app/modules/core/api-models/game/game.dto';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
import { BasketService } from 'src/app/modules/shared/services/basket/basketr.service';
import { GameService } from '../../../shared/services/game/game.service';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
})
export class AllGamesComponent implements OnInit {
  public games: Array<GameDTO>;

  constructor(
    private gameService: GameService,
    private router: Router,
    private basketService: BasketService,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    this.loadAllGames();
  }

  loadAllGames() {
    this.gameService.getAllGames().subscribe({
      next: (data) => (this.games = data),
      error: (error) => this.errorHandler.handleError(error),
    });
  }

  removeGame(id: number) {
    this.gameService.deleteGame(id).subscribe({
      next: () => this.loadAllGames(),
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
