import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditUserAdapter } from 'src/app/modules/core/adapters/user.adapters/edit.user.adapter';
import { UpdateUserDTO } from 'src/app/modules/core/api-models/user/update.user.dto';
import { SelectListItem } from 'src/app/modules/core/common/select.list.item';
import { Role } from 'src/app/modules/core/enums/role';
import { EnumHelper } from 'src/app/modules/core/helpers/enum.helper';
import { UserService } from 'src/app/modules/shared/services/user/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
})
export class UpdateUserComponent implements OnInit {
  public userName: string;
  public userToUpdate: UpdateUserDTO;
  public roles: Array<SelectListItem>;
  public enumHelper: EnumHelper;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private editUserAdapter: EditUserAdapter,
    private router: Router
  ) {
    this.enumHelper = new EnumHelper();
    this.userName = this.route.snapshot.params['name'];
    this.roles = EnumHelper.mapToSelectList(Role);
    this.userToUpdate = new UpdateUserDTO();
  }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    this.userService.getUser(this.userName).subscribe({
      next: (data) => (this.userToUpdate = this.editUserAdapter.adapt(data)),
    });
  }

  updateRole() {
    this.userService.updateUser(this.userToUpdate).subscribe({
      next: () => this.router.navigateByUrl('/users'),
    });
  }
}
