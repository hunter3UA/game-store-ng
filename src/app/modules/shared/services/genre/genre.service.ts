import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GenreAdapter } from 'src/app/modules/core/adapters/genre.adapter';
import { AddGenreDTO } from 'src/app/modules/core/api-models/genre/add.genre.dto';
import { GenreDTO } from 'src/app/modules/core/api-models/genre/genre.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  constructor(private http: HttpClient, private genreAdapter: GenreAdapter) {}

  addGenre(genreToAdd: AddGenreDTO): Observable<GenreDTO> {
    let url = `${environment.apiBaseUrl}/genres/new`;
    return this.http
      .post(url, genreToAdd)
      .pipe(map((data: any) => this.genreAdapter.adapt(data)));
  }

  getGenre(id: number): Observable<GenreDTO> {
    let url = `${environment.apiBaseUrl}/genres/${id}`;
    return this.http
      .get(url)
      .pipe(map((data: any) => this.genreAdapter.adapt(data)));
  }

  updateGenre(genreToUpdate: GenreDTO): Observable<GenreDTO> {
    let url = `${environment.apiBaseUrl}/genres/update`;
    return this.http
      .put(url, genreToUpdate)
      .pipe(map((data: any) => this.genreAdapter.adapt(data)));
  }

  getAllGenres(): Observable<GenreDTO[]> {
    let url = `${environment.apiBaseUrl}/genres`;
    return this.http
      .get<GenreDTO[]>(url)
      .pipe(
        map((data: any[]) => data.map((item) => this.genreAdapter.adapt(item)))
      );
  }

  removeGenre(id: number): Observable<boolean> {
    let url = `${environment.apiBaseUrl}/genres/remove/${id}`;
    return this.http.delete<boolean>(url);
  }
}
