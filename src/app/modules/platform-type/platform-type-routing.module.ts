import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Role } from '../core/enums/role';
import { AuthGuard } from '../root/guards/auth/auth.guard';
import { RoleGuard } from '../root/guards/role/role.guard';
import { AddPlatformComponent } from './pages/add-platform/add-platform.component';
import { AllPlatformsComponent } from './pages/all-platforms/all-platforms.component';
import { UpdatePlatformComponent } from './pages/update-platform/update-platform.component';

const routes: Routes = [
  { path: '', component: AllPlatformsComponent },
  {
    path: 'new',
    component: AddPlatformComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: [Role.Manager] },
  },
  {
    path: 'update/:id',
    component: UpdatePlatformComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: [Role.Manager] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformTypeRoutingModule {}
