import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreDTO } from 'src/app/modules/core/api-models/genre/genre.dto';
import { GenreTranslateDTO } from 'src/app/modules/core/api-models/genre/genre.translate.dto';
import { LocalizationHelper } from 'src/app/modules/core/helpers/localization.helper';
import { GenreService } from 'src/app/modules/shared/services/genre/genre.service';

@Component({
  selector: 'app-update-genre',
  templateUrl: './update-genre.component.html',
})
export class UpdateGenreComponent implements OnInit {
  public genreId: number;
  public genreToEdit: GenreDTO;
  public allGenres: Array<GenreDTO>;

  constructor(
    private genreService: GenreService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.genreId = this.route.snapshot.params['id'];
    this.genreToEdit = new GenreDTO();
  }

  ngOnInit(): void {
    this.loadGenre();
    this.loadAllGenres();
  }

  loadGenre() {
    this.genreService.getGenre(this.genreId).subscribe((data) => {
      this.genreToEdit = data;
      if (!this.genreToEdit.parentGenreId)
        this.genreToEdit.parentGenreId = null;
      this.genreToEdit.translations = LocalizationHelper.fillLanguages(
        this.genreToEdit.translations,
        GenreTranslateDTO
      );
    });
  }

  loadAllGenres() {
    this.genreService.getAllGenres().subscribe((data) => {
      this.allGenres = data.filter((el) => el.id != this.genreId);
    });
  }

  updateGenre() {
    this.genreService.updateGenre(this.genreToEdit).subscribe(() => {
      this.router.navigate(['/genres']);
    });
  }
}
