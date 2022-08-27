import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenreRoutingModule } from './genre-routing.module';
import { AllGenresComponent } from './pages/all-genres/all-genres.component';
import { AddGenreComponent } from './pages/add-genre/add-genre.component';
import { FormsModule } from '@angular/forms';
import { UpdateGenreComponent } from './pages/update-genre/update-genre.component';
import { SharedModule } from '../shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [AllGenresComponent, AddGenreComponent, UpdateGenreComponent],
  imports: [CommonModule, GenreRoutingModule, FormsModule, SharedModule],
})
export class GenreModule {}
