import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { Comment } from '../api-models/comment/comment';

@Injectable({ providedIn: 'root' })
export class CommentAdapter implements Adapter<Comment> {
  adapt(item: any): Comment {
    return new Comment(item.id, item.name, item.body, item.answers);
  }
}
