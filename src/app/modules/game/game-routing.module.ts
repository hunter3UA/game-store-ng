import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGameComponent } from './pages/add-game/add-game.component';
import { AllGamesComponent } from './pages/all-games/all-games.component';
import { RemoveGameComponent } from './pages/remove-game/remove-game.component';

const routes: Routes = [
    {path:'games',component:AllGamesComponent},  
    {path:'games/new',component:AddGameComponent},
    {path:'game/remove', component:RemoveGameComponent}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
