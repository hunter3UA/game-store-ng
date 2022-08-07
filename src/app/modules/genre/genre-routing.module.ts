import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Role } from '../core/enums/role';
import { AuthGuard } from '../root/guards/auth/auth.guard';
import { RoleGuard } from '../root/guards/role/role.guard';
import { AddGenreComponent } from './pages/add-genre/add-genre.component';
import { AllGenresComponent } from './pages/all-genres/all-genres.component';
import { UpdateGenreComponent } from './pages/update-genre/update-genre.component';

const routes: Routes = [
  { path: '', component: AllGenresComponent },
  {
    path: 'new',
    component: AddGenreComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: [Role.Manager] },
  },
  {
    path: 'update/:id',
    component: UpdateGenreComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: [Role.Manager] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenreRoutingModule {}
