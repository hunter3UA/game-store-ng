import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/modules/shared/services/comment/comment.service';
import { Comment } from '../../../core/api-models/comment/comment';

@Component({
  selector: 'app-comments-of-game',
  templateUrl: './comments-of-game.component.html',
})
export class CommentsOfGameComponent implements OnInit {
  gamekey: string;
  comments: Array<Comment>;
  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService
  ) {
    this.gamekey = this.route.snapshot.params['gamekey'];
  }

  ngOnInit(): void {
    this.loadCommentsByGameKey();
  }

  loadCommentsByGameKey() {
    this.commentService.getComments(this.gamekey).subscribe((data) => {
      if (data) {
        this.comments = data;
        console.log(this.comments);
      }
    });
  }
}
