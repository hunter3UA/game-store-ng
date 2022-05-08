import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGameComponent } from './pages/add-game/add-game.component';
import { AllGamesComponent } from './pages/all-games/all-games.component';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { UpdateGameComponent } from './pages/update-game/update-game.component';

const routes: Routes = [
  { path: '', component: AllGamesComponent },
  { path: 'new', component: AddGameComponent },
  { path: ':key', component: GameDetailsComponent },
  { path: 'update/:key', component: UpdateGameComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
