import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/modules/core/api-models/game/game';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
import { OrderService } from 'src/app/modules/shared/services/order/order.service';
import { GameService } from '../../../shared/services/game/game.service';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
})
export class AllGamesComponent implements OnInit {
  games: Array<Game>;

  constructor(
    private gameService: GameService,
    private router: Router,
    private orderService: OrderService,
    private erroHandler: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    this.loadAllGames();
  }

  loadAllGames() {
    this.gameService.getAllGames().subscribe({
      next: (data) => (this.games = data),
    });
  }

  removeGame(id: number) {
    this.gameService.deleteGame(id).subscribe(() => {
      this.loadAllGames();
    });
  }
  addOrderItem(gameKey: string) {
    this.orderService.addOrderItem(gameKey).subscribe({
      next: () => this.router.navigate(['/basket']),
      error: () => this.router.navigate(['/basket']),
    });
  }
}
