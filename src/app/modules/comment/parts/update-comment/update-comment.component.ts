import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommentDTO } from 'src/app/modules/core/api-models/comment/comment.dto';
import { CommentService } from 'src/app/modules/shared/services/comment/comment.service';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
})
export class UpdateCommentComponent {
  public updateCommentDTO: CommentDTO;
  public gameKey: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<UpdateCommentComponent>,
    private commentService: CommentService
  ) {
    this.updateCommentDTO = data[0];
    this.gameKey = data[1];
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close' });
  }

  updateComment(name: string, body: string) {
    this.updateCommentDTO.name = name;
    this.updateCommentDTO.body = body;
    this.commentService
      .updateComment(this.updateCommentDTO)
      .subscribe((data) => {
        if (data) this.closeDialog();
      });
  }
}
