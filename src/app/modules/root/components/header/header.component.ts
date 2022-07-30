import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { GameService } from 'src/app/modules/shared/services/game/game.service';
import { TokenStorageService } from 'src/app/modules/user/services/token-storage/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public totalCountOfGames: number;

  constructor(
    private gameService: GameService,
    public tokenService: TokenStorageService
  ) {}
  ngOnInit(): void {
    this.loadAllGames();
  }

  loadAllGames() {
    this.gameService.getTotalGames().subscribe((data) => {
      if (data) {
        this.totalCountOfGames = data;
      }
    });
  }
}
