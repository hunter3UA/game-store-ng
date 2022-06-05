import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddCommentDTO } from 'src/app/modules/core/api-models/comment/add.comment.dto';
import { CommentService } from 'src/app/modules/shared/services/comment/comment.service';

@Component({
  selector: 'app-add-reply',
  templateUrl: './add-reply.component.html',
})
export class AddReplyComponent {
  public newComment: AddCommentDTO;
  public modalData: {
    gameKey: string;
    parentCommentId: number;
    isQuote: boolean;
  };
  constructor(
    private dialogRef: MatDialogRef<AddReplyComponent>,
    private commentService: CommentService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.modalData = data;
    this.newComment = new AddCommentDTO();
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close' });
  }

  addReply() {
    this.newComment.parentCommentId = this.modalData.parentCommentId;
    this.newComment.isQuote = this.modalData.isQuote;
    this.commentService
      .addComment(this.modalData.gameKey, this.newComment)
      .subscribe((data) => {
        if (data)
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
              this.router.navigate(
                [`/games/${this.modalData.gameKey}/comments`],
                {
                  fragment: `comment${data.id}`,
                }
              );
            });
        this.closeDialog();
      });
  }
}
