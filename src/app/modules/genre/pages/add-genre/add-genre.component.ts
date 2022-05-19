import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddGenreModel } from 'src/app/modules/core/api-models/genre/add.genre.model';
import { GenreModel } from 'src/app/modules/core/api-models/genre/genre.model';
import { GenreService } from 'src/app/modules/shared/services/genre/genre.service';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
})
export class AddGenreComponent implements OnInit {
  public genreToAdd: AddGenreModel;
  public allGenres: Array<GenreModel>;

  constructor(private genreService: GenreService, private router: Router) {
    this.allGenres = new Array<GenreModel>();
    this.genreToAdd = new AddGenreModel();
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
    this.genreService.addGenre(this.genreToAdd).subscribe(() => {
      this.router.navigate(['/genres']);
    });
  }
}
