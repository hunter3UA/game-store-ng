import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AddCommentDTO } from 'src/app/modules/core/api-models/comment/add.comment.dto';
import { CommentDTO } from 'src/app/modules/core/api-models/comment/comment.dto';
import { environment } from 'src/environments/environment';

import { CommentService } from './comment.service';

describe('CommentService', () => {
  let service: CommentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CommentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('addComment() should return comment', () => {
    const fakeComment: AddCommentDTO = {
      name: 'Author1',
      body: 'My comment',
      parentCommentId: 0,
    };

    service.addComment('my-key', fakeComment).subscribe((response) => {
      expect(typeof response).toBe(typeof new CommentDTO());
    });

    const request = httpMock.expectOne(
      `${environment.apiBaseUrl}/games/my-key/newcomment`
    );

    expect(request.request.method).toBe('POST');

    request.flush(new CommentDTO());
  });

  it('getComments(gameKey) should return array of comments by game key', () => {
    const fakeComments: Array<CommentDTO> = [
      {
        id: 1,
        name: 'Author1',
        body: 'My comment1',
        answers: null,
      },
      {
        id: 2,
        name: 'Author2',
        body: 'My comment2',
        answers: null,
      },
    ];

    service.getComments('my-key').subscribe((response) => {
      expect(typeof response).toBe(typeof fakeComments);
    });

    const request = httpMock.expectOne(
      `${environment.apiBaseUrl}/games/my-key/comments`
    );

    expect(request.request.method).toBe('GET');

    request.flush(fakeComments);
  });
});
