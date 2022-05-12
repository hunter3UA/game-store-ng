import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/modules/core/api-models/game/game';
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
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.loadAllGames();
  }

  loadAllGames() {
    this.gameService.getAllGames().subscribe(
      (data: Game[]) => {
        if (data) {
          this.games = data;
          console.log(data);
        }
      },
      (err) => console.log(err)
    );
  }

  removeGame(id: number) {
    console.log(id);
    this.gameService.deleteGame(id).subscribe((response) => {
      this.loadAllGames();
    });
  }
  addOrderItem(gameKey: string, price: number) {
    this.orderService.addOrderItem(gameKey, price).subscribe(
      (data) => {
        this.router.navigate(['/basket']);
      },
      (error) => {
        this.router.navigate(['/basket']);
      }
    );
  }
}
