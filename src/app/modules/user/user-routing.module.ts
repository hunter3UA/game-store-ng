import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Role } from '../core/enums/role';
import { AuthGuard } from '../root/guards/auth/auth.guard';
import { RoleGuard } from '../root/guards/role/role.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [RoleGuard],
    data: { roles: [Role.Admin] },
  },
  {
    path: 'users/update/:name',
    component: UpdateUserComponent,
    canActivate: [RoleGuard],
    data: { roles: [Role.Admin] },
  },
  { path: 'profile', component: UserPageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
