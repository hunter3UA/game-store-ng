import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GenreAdapter } from 'src/app/modules/core/adapters/genre.adapter';
import { AddGenreModel } from 'src/app/modules/core/api-models/genre/add.genre.model';
import { Genre } from 'src/app/modules/core/api-models/genre/genre';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  constructor(private http: HttpClient, private genreAdapter: GenreAdapter) {}

  addGenre(genreToAdd: AddGenreModel): Observable<any> {
    let url = `${environment.apiBaseUrl}genres/new`;
    return this.http
      .post(url, genreToAdd)
      .pipe(map((data: any) => this.genreAdapter.adapt(data)));
  }

  getGenre(id: number): Observable<Genre> {
    let url = `${environment.apiBaseUrl}genres/${id}`;
    return this.http
      .get(url)
      .pipe(map((data: any) => this.genreAdapter.adapt(data)));
  }

  updateGenre(genreToUpdate: Genre): Observable<any> {
    let url = `${environment.apiBaseUrl}genres/update`;
    return this.http
      .put(url, genreToUpdate)
      .pipe(map((data: any) => this.genreAdapter.adapt(data)));
  }

  getAllGenres(): Observable<Genre[]> {
    let url = `${environment.apiBaseUrl}genres`;
    return this.http
      .get(url)
      .pipe(
        map((data: any[]) => data.map((item) => this.genreAdapter.adapt(item)))
      );
  }

  removeGenre(id: number): Observable<any> {
    let url = `${environment.apiBaseUrl}genres/remove/${id}`;
    return this.http.delete(url);
  }
}
