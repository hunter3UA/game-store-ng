import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddGenreModel } from 'src/app/modules/core/api-models/genre/add.genre.model';
import { EditGenreModel } from 'src/app/modules/core/api-models/genre/edit.genre.model';
import { Genre } from 'src/app/modules/core/api-models/genre/genre';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  constructor(private http: HttpClient) {}

  addGenre(genreToAdd: AddGenreModel): Observable<any> {
    if (genreToAdd.parentGenreId == 0) genreToAdd.parentGenreId = null;
    let url = `${environment.apiBaseUrl}genres/new`;
    return this.http.post(url, genreToAdd);
  }

  getGenre(id: number): Observable<any> {
    let url = `${environment.apiBaseUrl}genres/${id}`;
    return this.http.get(url);
  }

  updateGenre(genreToUpdate: Genre): Observable<any> {
    let url = `${environment.apiBaseUrl}genres/update`;
    return this.http.put(url, genreToUpdate);
  }

  getAllGenres(): Observable<any> {
    let url = `${environment.apiBaseUrl}genres`;
    return this.http.get(url);
  }

  removeGenre(id: number): Observable<any> {
    let url = `${environment.apiBaseUrl}genres/remove/${id}`;
    return this.http.delete(url);
  }
}
