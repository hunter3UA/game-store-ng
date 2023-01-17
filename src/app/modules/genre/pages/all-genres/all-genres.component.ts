import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GenreDTO } from 'src/app/modules/core/api-models/genre/genre.dto';
import { GenreService } from 'src/app/modules/shared/services/genre/genre.service';

@Component({
  selector: 'app-all-genres',
  templateUrl: './all-genres.component.html',
})
export class AllGenresComponent implements OnInit {
  public genres: Array<GenreDTO>;

  constructor(
    private genreService: GenreService,
    public translateService: TranslateService
  ) {}

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
