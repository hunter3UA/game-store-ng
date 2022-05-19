import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { Comment } from '../api-models/comment/comment.model';

@Injectable({ providedIn: 'root' })
export class CommentAdapter implements Adapter<Comment> {
  adapt(item: any): Comment {
    let comment = new Comment();
    comment.id = item.id;
    comment.name = item.name;
    comment.body = item.body;
    comment.answers = item.answers;

    return comment;
  }
}
