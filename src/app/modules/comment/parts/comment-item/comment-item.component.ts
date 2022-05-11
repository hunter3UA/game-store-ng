import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AddCommentModel } from 'src/app/modules/core/api-models/comment/add.comment.model';
import { CommentService } from 'src/app/modules/shared/services/comment/comment.service';
import { Comment } from '../../../core/api-models/comment/comment';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
})
export class CommentItemComponent implements OnInit {
  @Input() comments: Array<Comment>;

  @Input() parentComment: Comment;

  @Input() gameKey: string;

  newComment: AddCommentModel;

  constructor(
    private commentService: CommentService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.newComment = new AddCommentModel();
  }

  ngOnInit(): void {}

  addReply(name: string, body: string, parentId) {
    this.newComment.name = name;
    this.newComment.body = body;

    this.newComment.parentCommentId = parentId;

    this.commentService
      .addComment(this.gameKey, this.newComment)
      .subscribe((data) => {
        if (data)
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
              this.router.navigate([`/games/${this.gameKey}/comments`], {
                fragment: `comment${data.id}`,
              });
            });
      });
  }
}
