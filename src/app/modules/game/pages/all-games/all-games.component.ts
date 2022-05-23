import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameModel } from 'src/app/modules/core/api-models/game/game.model';
import { OrderService } from 'src/app/modules/shared/services/order/order.service';
import { GameService } from '../../../shared/services/game/game.service';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
})
export class AllGamesComponent implements OnInit {
  public games: Array<GameModel>;

  constructor(
    private gameService: GameService,
    private router: Router,
    private orderService: OrderService
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
