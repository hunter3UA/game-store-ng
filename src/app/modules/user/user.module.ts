import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './pages/user-list/user-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateRoleComponent } from './pages/update-role/update-role.component';

@NgModule({
  declarations: [LoginComponent, UserListComponent, RegisterComponent, UpdateRoleComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule],
})
export class UserModule {}
