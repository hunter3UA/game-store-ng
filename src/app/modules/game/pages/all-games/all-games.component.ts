import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/modules/shared/models/api-models/game/game';
import { GameService } from '../../../shared/services/game/game.service';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
})
export class AllGamesComponent implements OnInit {
  games: Array<Game>;

  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit(): void {
    this.loadAllGames();
  }

  loadAllGames() {
    this.gameService.getAllGames().subscribe(
      (data) => {
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
}
