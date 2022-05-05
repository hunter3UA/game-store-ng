import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGameComponent } from './pages/add-game/add-game.component';
import { AllGamesComponent } from './pages/all-games/all-games.component';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { RemoveGameComponent } from './pages/remove-game/remove-game.component';

const routes: Routes = [
    {path:'games',component:AllGamesComponent},  
    {path:'games/new',component:AddGameComponent},
    {path:'games/remove', component:RemoveGameComponent},
    {path:'games/:key',component:GameDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
