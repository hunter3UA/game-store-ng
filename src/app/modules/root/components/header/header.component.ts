import { Component } from '@angular/core';
import { GameService } from 'src/app/modules/shared/services/game/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public totalCountOfGames: number;

  constructor(private gameService: GameService) {
    this.loadAllGames();
  }

  loadAllGames() {
    this.gameService.getAllGames().subscribe((data) => {
      this.totalCountOfGames = data.length;
      console.log(data);
    });
  }
}
