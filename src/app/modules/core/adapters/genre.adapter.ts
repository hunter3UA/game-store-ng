import { Injectable } from '@angular/core';
import { GenreModel } from '../api-models/genre/genre.model';
import { Adapter } from './adapter';

@Injectable({ providedIn: 'root' })
export class GenreAdapter implements Adapter<GenreModel> {
  adapt(item: any): GenreModel {
    let genre = new GenreModel();
    genre.id = item.id;
    genre.name = item.name;
    genre.subGenres = item.subGenres;
    genre.parentGenreId = item.parentGenreId;
    return genre;
  }
}
