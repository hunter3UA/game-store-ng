import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GenreService } from './genre.service';
import { GenreModel } from 'src/app/modules/core/api-models/genre/genre.model';
import { environment } from 'src/environments/environment';

describe('GenreService', () => {
  let service: GenreService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GenreService],
    });
    service = TestBed.inject(GenreService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('addGenre(genreToAdd) should return added genre', () => {
    const fakeGenre: GenreModel = {
      id: 1,
      name: 'Genre1',
      subGenres: new Array<GenreModel>(),
      parentGenreId: null,
    };

    service.addGenre(fakeGenre).subscribe((response) => {
      expect(typeof response).toBe(typeof fakeGenre);
    });

    const request = httpMock.expectOne(`${environment.apiBaseUrl}/genres/new`);
    expect(request.request.method).toBe('POST');

    request.flush(fakeGenre);
  });

  it('updateGenere(genreToUpdate) should return updated genre', () => {
    const fakeGenre: GenreModel = {
      id: 1,
      name: 'Genre1',
      subGenres: new Array<GenreModel>(),
      parentGenreId: null,
    };

    service.updateGenre(fakeGenre).subscribe((response) => {
      expect(typeof response).toBe(typeof fakeGenre);
    });

    const request = httpMock.expectOne(
      `${environment.apiBaseUrl}/genres/update`
    );
    expect(request.request.method).toBe('PUT');

    request.flush(fakeGenre);
  });

  it('getAllGenres() should return array of genres', () => {
    const fakeGenres: Array<GenreModel> = [
      {
        id: 1,
        name: 'Genre1',
        subGenres: new Array<GenreModel>(),
        parentGenreId: null,
      },
      {
        id: 2,
        name: 'Genre2',
        subGenres: new Array<GenreModel>(),
        parentGenreId: 1,
      },
    ];

    service.getAllGenres().subscribe((genres) => {
      expect(genres.length).toBe(2);
      expect(typeof genres).toEqual(typeof fakeGenres);
    });

    const request = httpMock.expectOne(`${environment.apiBaseUrl}/genres`);
    expect(request.request.method).toBe('GET');

    request.flush(fakeGenres);
  });

  it('getGenre(id) should return genre', () => {
    let fakeGenre: GenreModel = {
      id: 1,
      name: 'Test genre',
      subGenres: new Array<GenreModel>(),
      parentGenreId: null,
    };

    service.getGenre(1).subscribe((genre) => {
      expect(typeof genre).toEqual(typeof fakeGenre);
    });

    const request = httpMock.expectOne(`${environment.apiBaseUrl}/genres/1`);
    expect(request.request.method).toBe('GET');

    request.flush(fakeGenre);
  });

  it('deleteGenre(id) should return true if genre has been removed', () => {
    service.removeGenre(1).subscribe((response) => {
      expect(response).toBe(true);
    });

    const request = httpMock.expectOne(
      `${environment.apiBaseUrl}/genres/remove/1`
    );

    expect(request.request.method).toBe('DELETE');
    request.flush(true);
  });
});
