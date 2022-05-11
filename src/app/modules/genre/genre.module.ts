import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenreRoutingModule } from './genre-routing.module';
import { AllGenresComponent } from './pages/all-genres/all-genres.component';
import { AddGenreComponent } from './pages/add-genre/add-genre.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AllGenresComponent, AddGenreComponent],
  imports: [CommonModule, GenreRoutingModule, FormsModule],
})
export class GenreModule {}
