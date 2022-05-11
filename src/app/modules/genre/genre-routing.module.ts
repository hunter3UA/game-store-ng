import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGenreComponent } from './pages/add-genre/add-genre.component';
import { AllGenresComponent } from './pages/all-genres/all-genres.component';

const routes: Routes = [
  { path: 'all', component: AllGenresComponent },
  { path: 'new', component: AddGenreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenreRoutingModule {}
