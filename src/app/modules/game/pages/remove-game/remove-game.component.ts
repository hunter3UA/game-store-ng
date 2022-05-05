import { Component, OnInit } from '@angular/core';

import { GameService } from '../../../shared/services/game/game.service';

@Component({
  selector: 'app-remove-game',
  templateUrl: './remove-game.component.html',
})
export class RemoveGameComponent implements OnInit {
  status: string;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {}

  deleteGame(id: number) {
    this.gameService.deleteGame(id).subscribe({
      next: (data) => {
        this.status = 'Delete successful';
      },
      error: (error) => {
        this.status = 'Error';
        console.error('There was an error!', error);
      },
    });
  }
}
