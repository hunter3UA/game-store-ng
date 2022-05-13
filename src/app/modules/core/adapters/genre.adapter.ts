import { Injectable } from '@angular/core';
import { Genre } from '../api-models/genre/genre';
import { Adapter } from './adapter';

@Injectable({ providedIn: 'root' })
export class GenreAdapter implements Adapter<Genre> {
  adapt(item: any): Genre {
    let genre = new Genre();
    genre.id = item.id;
    genre.name = item.name;
    genre.subGenres = item.subGenres;
    genre.parentGenreId = item.parentGenreId;
    return genre;
  }
}
