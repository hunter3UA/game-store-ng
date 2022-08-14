import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentGuard } from '../root/guards/comment/comment.guard';
import { BanTypeComponent } from './pages/ban-type/ban-type.component';
import { CommentsOfGameComponent } from './pages/comments-of-game/comments-of-game.component';

const routes: Routes = [
  {
    path: 'games/:gamekey/comments',
    component: CommentsOfGameComponent,
    canActivate: [CommentGuard],
  },
  { path: 'games/comments/ban', component: BanTypeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentRoutingModule {}
