import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { CommentsOfGameComponent } from './pages/comments-of-game/comments-of-game.component';

const routes: Routes = [
  { path: 'games/:gamekey/comments', component: CommentsOfGameComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentRoutingModule {}
