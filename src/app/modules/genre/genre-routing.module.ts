import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGenreComponent } from './pages/add-genre/add-genre.component';
import { AllGenresComponent } from './pages/all-genres/all-genres.component';
import { UpdateGenreComponent } from './pages/update-genre/update-genre.component';

const routes: Routes = [
  { path: '', component: AllGenresComponent },
  { path: 'new', component: AddGenreComponent },
  { path: 'update/:id', component: UpdateGenreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenreRoutingModule {}
