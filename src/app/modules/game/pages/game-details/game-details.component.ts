import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/modules/shared/models/api-models/game/game';
import { GameService } from 'src/app/modules/shared/services/game/game.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
})
export class GameDetailsComponent implements OnInit {
  game: Game;
  key: string;
  constructor(private gameService: GameService, private route: ActivatedRoute) {
    this.key = this.route.snapshot.params['key'];
  }

  ngOnInit(): void {
    this.loadGame();
  }

  loadGame() {
    this.gameService.getGameByKey(this.key).subscribe((data) => {
      if (data) {
        this.game = data;
      }
    });
  }
}
