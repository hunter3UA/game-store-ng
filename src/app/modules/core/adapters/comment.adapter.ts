import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { CommentDTO } from '../api-models/comment/comment.dto';

@Injectable({ providedIn: 'root' })
export class CommentAdapter implements Adapter<CommentDTO> {
  adapt(item: any): CommentDTO {
    let comment = new CommentDTO();
    comment.id = item.id;
    comment.name = item.name;
    comment.body = item.body;
    comment.answers = item.answers;
    comment.isQuote = item.isQuote;
    comment.isDeleted = item.isDeleted;

    return comment;
  }
}
