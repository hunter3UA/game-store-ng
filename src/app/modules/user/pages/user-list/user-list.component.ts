import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/modules/core/api-models/user/user.dto';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
import { UserService } from 'src/app/modules/shared/services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  public users: Array<UserDTO>;
  constructor(
    private userService: UserService,
    private errorService: ErrorHandlerService
  ) {
    this.users = new Array<UserDTO>();
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getListOfUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => this.errorService.handleError(error),
    });
  }
}
