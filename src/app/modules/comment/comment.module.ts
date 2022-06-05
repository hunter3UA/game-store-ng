import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentRoutingModule } from './comment-routing.module';
import { CommentsOfGameComponent } from './pages/comments-of-game/comments-of-game.component';
import { CommentItemComponent } from './parts/comment-item/comment-item.component';
import { FormsModule } from '@angular/forms';
import { QuoteComponent } from './parts/quote/quote.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddReplyComponent } from './parts/add-reply/add-reply.component';
import { UpdateCommentComponent } from './parts/update-comment/update-comment.component';

@NgModule({
  declarations: [CommentsOfGameComponent, CommentItemComponent, QuoteComponent, AddReplyComponent, UpdateCommentComponent],
  imports: [CommonModule, CommentRoutingModule, FormsModule, MatDialogModule],
})
export class CommentModule {}
