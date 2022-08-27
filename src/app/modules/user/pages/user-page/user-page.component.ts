import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditUserAdapter } from 'src/app/modules/core/adapters/user.adapters/edit.user.adapter';
import { UpdateUserDTO } from 'src/app/modules/core/api-models/user/update.user.dto';
import { SelectListItem } from 'src/app/modules/core/common/select.list.item';
import { Role } from 'src/app/modules/core/enums/role';
import { EnumHelper } from 'src/app/modules/core/helpers/enum.helper';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
import { UserService } from 'src/app/modules/shared/services/user/user.service';
import { TokenStorageService } from '../../services/token-storage/token-storage.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
})
export class UserPageComponent implements OnInit {
  public userName: string;
  public userToUpdate: UpdateUserDTO;
  public roles: Array<SelectListItem>;

  constructor(
    private userService: UserService,
    private editUserAdapter: EditUserAdapter,
    private tokenService: TokenStorageService,
    private errorService: ErrorHandlerService
  ) {
    this.userName = this.tokenService.getUser().name;
    this.userToUpdate = new UpdateUserDTO();
  }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    this.userService.getUser(this.userName).subscribe({
      next: (data) => {
        this.userToUpdate = this.editUserAdapter.adapt(data);
      },
    });
  }
  updateUser() {
    let result = confirm('You will need to log in after the update');
    if (result) {
      this.userService.updateUser(this.userToUpdate).subscribe({
        next: () => this.tokenService.signOut(),
        error: (error) => this.errorService.handleError(error),
      });
    }
  }
}
