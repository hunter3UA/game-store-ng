import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CommentAdapter } from 'src/app/modules/core/adapters/comment.adapter';
import { AddCommentDTO } from 'src/app/modules/core/api-models/comment/add.comment.dto';
import { environment } from 'src/environments/environment';
import { CommentDTO } from '../../../core/api-models/comment/comment.dto';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(
    private http: HttpClient,
    private commentAdapter: CommentAdapter
  ) {}

  getComments(gameKey: string): Observable<CommentDTO[]> {
    console.log(gameKey);
    let url = `${environment.apiBaseUrl}/games/${gameKey}/comments`;
    return this.http
      .get(url)
      .pipe(
        map((data: any[]) =>
          data.map((item) => this.commentAdapter.adapt(item))
        )
      );
  }

  addComment(gameKey: string, comment: AddCommentDTO): Observable<CommentDTO> {
    let url = `${environment.apiBaseUrl}/games/${gameKey}/newcomment`;
    return this.http
      .post(url, comment)
      .pipe(map((data: any) => this.commentAdapter.adapt(data)));
  }
}
