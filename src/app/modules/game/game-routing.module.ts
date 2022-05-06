import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGameComponent } from './pages/add-game/add-game.component';
import { AllGamesComponent } from './pages/all-games/all-games.component';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { UpdateGameComponent } from './pages/update-game/update-game.component';

const routes: Routes = [
  { path: 'games', component: AllGamesComponent },
  { path: 'games/new', component: AddGameComponent },
  { path: 'games/:key', component: GameDetailsComponent },
  { path: 'games/update/:key', component: UpdateGameComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
