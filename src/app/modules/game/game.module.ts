import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { AddGameComponent } from './pages/add-game/add-game.component';
import { AllGamesComponent } from './pages/all-games/all-games.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RemoveGameComponent } from './pages/remove-game/remove-game.component';
import { GameItemComponent } from './parts/game-item/game-item.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { GameDetailsComponent } from './pages/game-details/game-details.component';

@NgModule({
  declarations: [
    AddGameComponent,
    AllGamesComponent,
    RemoveGameComponent,
    GameItemComponent,
    GameDetailsComponent,
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
})
export class GameModule {}
