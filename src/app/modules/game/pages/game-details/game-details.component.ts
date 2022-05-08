import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Game } from 'src/app/modules/core/api-models/game/game';
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
  downloadGame() {
    this.gameService.downloadGame(this.key).subscribe((response) => {
      let fileName = response.headers.get('content-disposition');
      console.log(fileName);
      let blob: Blob = response.body as Blob;
      let a = document.createElement('a');
      a.download = fileName;
      a.href = window.URL.createObjectURL(blob);
      a.click();
    });
  }
}
// let fileName = response.headers
//         .get('content-disposition')
//         ?.split(';')[1]
//         .split('=')[1];
