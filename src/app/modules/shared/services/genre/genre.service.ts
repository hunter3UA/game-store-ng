import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  constructor(private http: HttpClient) {}

  getAllGenres(): Observable<any> {
    let url = `${environment.apiBaseUrl}genres`;
    return this.http.get(url);
  }
}
