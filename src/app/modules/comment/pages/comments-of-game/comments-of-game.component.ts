import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddCommentModel } from 'src/app/modules/core/api-models/comment/add.comment.model';
import { CommentService } from 'src/app/modules/shared/services/comment/comment.service';
import { Comment } from '../../../core/api-models/comment/comment.model';

@Component({
  selector: 'app-comments-of-game',
  templateUrl: './comments-of-game.component.html',
})
export class CommentsOfGameComponent implements OnInit {
  public gamekey: string;
  public comments: Array<Comment>;
  public newComment: AddCommentModel;
  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService
  ) {
    this.gamekey = this.route.snapshot.params['gamekey'];
    this.newComment = new AddCommentModel();
    this.comments = new Array<Comment>();
  }

  ngOnInit(): void {
    this.loadCommentsByGameKey();
  }

  addComment() {
    this.commentService
      .addComment(this.gamekey, this.newComment)
      .subscribe((data) => {
        if (data) {
          this.loadCommentsByGameKey();
        }
      });
  }
  getId(id: number) {
    this.newComment.parentCommentId = id;
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
