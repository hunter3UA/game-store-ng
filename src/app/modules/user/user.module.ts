import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './pages/user-list/user-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';

@NgModule({
  declarations: [
    LoginComponent,
    UserListComponent,
    RegisterComponent,
    UserPageComponent,
    UpdateUserComponent,
  ],
  imports: [CommonModule, UserRoutingModule, FormsModule],
})
export class UserModule {}
