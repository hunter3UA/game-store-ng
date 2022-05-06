import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { AddGameComponent } from './pages/add-game/add-game.component';
import { AllGamesComponent } from './pages/all-games/all-games.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { UpdateGameComponent } from './pages/update-game/update-game.component';
import { CommentRoutingModule } from '../comment/comment-routing.module';
import { CommentModule } from '../comment/comment.module';

@NgModule({
  declarations: [
    AddGameComponent,
    AllGamesComponent,
    GameDetailsComponent,
    UpdateGameComponent,
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
