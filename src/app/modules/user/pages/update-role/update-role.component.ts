import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditUserAdapter } from 'src/app/modules/core/adapters/user.adapters/edit.user.adapter';
import { UpdateUserDTO } from 'src/app/modules/core/api-models/user/update.user.dto';
import { SelectListItem } from 'src/app/modules/core/common/select.list.item';
import { Role } from 'src/app/modules/core/enums/role';
import { DdlHelper } from 'src/app/modules/shared/helpers/ddl.helper';
import { UserService } from 'src/app/modules/shared/services/user/user.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
})
export class UpdateRoleComponent implements OnInit {
  public userName: string;
  public userToUpdate: UpdateUserDTO;
  public roles: Array<SelectListItem>;
  public ddlHelper: DdlHelper;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private editUserAdapter: EditUserAdapter,
    private router: Router
  ) {
    this.ddlHelper = new DdlHelper();
    this.userName = this.route.snapshot.params['name'];
    this.roles = this.ddlHelper.mapToSelectList(Role);
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
