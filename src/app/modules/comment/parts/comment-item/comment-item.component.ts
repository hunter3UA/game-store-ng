import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AddCommentDTO } from 'src/app/modules/core/api-models/comment/add.comment.dto';
import { CommentService } from 'src/app/modules/shared/services/comment/comment.service';
import { CommentDTO } from '../../../core/api-models/comment/comment.dto';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
})
export class CommentItemComponent {
  @Input() comments: Array<CommentDTO>;

  @Input() parentComment: CommentDTO;

  @Input() gameKey: string;

  newComment: AddCommentDTO;

  constructor(private commentService: CommentService, private router: Router) {
    this.newComment = new AddCommentDTO();
    this.comments = new Array<CommentDTO>();
    this.gameKey = '';
  }

  addReply(name: string, body: string, parentId: number) {
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
