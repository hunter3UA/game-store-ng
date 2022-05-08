import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentsOfGameComponent } from './pages/comments-of-game/comments-of-game.component';
import { GameModule } from '../game/game.module';
import { CommentItemComponent } from './parts/comment-item/comment-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommentsOfGameComponent, CommentItemComponent],
  imports: [CommonModule, CommentRoutingModule, FormsModule],
})
export class CommentModule {}
