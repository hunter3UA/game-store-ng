import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/modules/core/api-models/genre/genre';
import { GenreService } from 'src/app/modules/shared/services/genre/genre.service';

@Component({
  selector: 'app-all-genres',
  templateUrl: './all-genres.component.html',
})
export class AllGenresComponent implements OnInit {
  genres: Array<Genre>;

  constructor(private genreService: GenreService) {}

  ngOnInit(): void {
    this.loadGenres();
  }

  loadGenres() {
    this.genreService.getAllGenres().subscribe((data) => {
      this.genres = data;
    });
  }

  removeGenre(id: number) {
    this.genreService.removeGenre(id).subscribe(() => {
      this.loadGenres();
    });
  }
}
