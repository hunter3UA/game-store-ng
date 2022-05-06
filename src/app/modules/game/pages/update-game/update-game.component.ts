import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/modules/core/api-models/game/game';
import { GameService } from 'src/app/modules/shared/services/game/game.service';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
})
export class UpdateGameComponent implements OnInit {
  key: string;
  gameComponentModel: any;
  gameByKey: Game;
  constructor(private gameService: GameService, private route: ActivatedRoute) {
    this.key = this.route.snapshot.params['key'];
  }

  ngOnInit(): void {}

  loadGame() {
    this.gameService.getGameByKey(this.key).subscribe((data) => {
      if (data) {
        this.gameByKey = data;
        console.log(this.gameByKey);
      }
    });
  }
}
