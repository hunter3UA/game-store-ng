import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddGenreDTO } from 'src/app/modules/core/api-models/genre/add.genre.dto';
import { GenreDTO } from 'src/app/modules/core/api-models/genre/genre.dto';
import { GenreTranslateDTO } from 'src/app/modules/core/api-models/genre/genre.translate.dto';
import { LocalizationHelper } from 'src/app/modules/core/helpers/localization.helper';
import { GenreService } from 'src/app/modules/shared/services/genre/genre.service';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
})
export class AddGenreComponent implements OnInit {
  public genreToAdd: AddGenreDTO;
  public allGenres: Array<GenreDTO>;

  constructor(private genreService: GenreService, private router: Router) {
    this.allGenres = new Array<GenreDTO>();
    this.genreToAdd = new AddGenreDTO();
    this.genreToAdd.translations =
      LocalizationHelper.initialize(GenreTranslateDTO);
  }

  ngOnInit(): void {
    this.loadGenres();
  }

  loadGenres() {
    this.genreService.getAllGenres().subscribe((data) => {
      this.allGenres = data;
    });
  }
  addGenre() {
    console.log(this.genreToAdd);
    this.genreService.addGenre(this.genreToAdd).subscribe(() => {
      this.router.navigate(['/genres']);
    });
  }
}
