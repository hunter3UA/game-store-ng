import { Injectable } from '@angular/core';
import { GenreDTO } from '../api-models/genre/genre.dto';
import { Adapter } from './adapter';

@Injectable({ providedIn: 'root' })
export class GenreAdapter implements Adapter<GenreDTO> {
  adapt(item: any): GenreDTO {
    let genre = new GenreDTO();
    genre.id = item.id;
    genre.name = item.name;
    genre.subGenres = item.subGenres;
    genre.parentGenreId = item.parentGenreId;
    genre.categoryId = item.categoryId;
    return genre;
  }
}
