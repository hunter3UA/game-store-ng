import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { GameService } from 'src/app/modules/shared/services/game/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public totalCountOfGames: number;

  constructor(private gameService: GameService) {}
  ngOnInit(): void {
    this.loadAllGames();
  }

  async loadAllGames() {
    this.totalCountOfGames = await lastValueFrom(
      this.gameService.getTotalGames()
    );
    // this.gameService.getTotalGames().subscribe((data) => {
    //   if (data) {
    //     this.totalCountOfGames = data;
    //   }
    // });
  }
}
