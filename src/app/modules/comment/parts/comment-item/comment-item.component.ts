import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from 'src/app/modules/shared/services/comment/comment.service';
import { CommentDTO } from '../../../core/api-models/comment/comment.dto';
import { MatDialog } from '@angular/material/dialog';
import { AddReplyComponent } from '../add-reply/add-reply.component';
import { UpdateCommentComponent } from '../update-comment/update-comment.component';
@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
})
export class CommentItemComponent {
  @Input() comments: Array<CommentDTO>;

  @Input() parentComment: CommentDTO;

  @Input() gameKey: string;

  constructor(
    private commentService: CommentService,
    private router: Router,
    private dialogRef: MatDialog
  ) {
    this.comments = new Array<CommentDTO>();
    this.gameKey = '';
  }
  addReply(parentCommentId: number, isQuote: boolean) {
    this.dialogRef.open(AddReplyComponent, {
      width: '600px',
      data: {
        gameKey: this.gameKey,
        parentCommentId: parentCommentId,
        isQuote: isQuote,
      },
    });
  }

  updateComment(comment: CommentDTO) {
    this.dialogRef.open(UpdateCommentComponent, {
      width: '600px',
      data: [comment, { gameKey: this.gameKey }],
    });
  }

  removeComment(id: number) {
    this.commentService.removeComment(id).subscribe((data) => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([`/games/${this.gameKey}/comments`], {
          fragment: `comment${id}`,
        });
      });
    });
  }
}
