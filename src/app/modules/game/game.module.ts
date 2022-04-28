import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { AddComponent } from './pages/add/add.component';
import { AddGameComponent } from './pages/add-game/add-game.component';


@NgModule({
  declarations: [
    AddComponent,
    AddGameComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
