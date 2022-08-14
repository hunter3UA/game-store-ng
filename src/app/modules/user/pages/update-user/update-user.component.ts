import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditUserAdapter } from 'src/app/modules/core/adapters/user.adapters/edit.user.adapter';
import { PublisherDTO } from 'src/app/modules/core/api-models/publisher/publisher.dto';
import { UpdateUserDTO } from 'src/app/modules/core/api-models/user/update.user.dto';
import { SelectListItem } from 'src/app/modules/core/common/select.list.item';
import { Role } from 'src/app/modules/core/enums/role';
import { EnumHelper } from 'src/app/modules/core/helpers/enum.helper';
import { PublisherService } from 'src/app/modules/shared/services/publisher/publisher.service';
import { UserService } from 'src/app/modules/shared/services/user/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
})
export class UpdateUserComponent implements OnInit {
  public userName: string;
  public userToUpdate: UpdateUserDTO;
  public roles: Array<SelectListItem>;
  public publishers: Array<PublisherDTO>;

  constructor(
    private userService: UserService,
    private publisherService: PublisherService,
    private route: ActivatedRoute,
    private editUserAdapter: EditUserAdapter,
    private router: Router
  ) {
    this.userName = this.route.snapshot.params['name'];
    this.roles = EnumHelper.mapStringEnumToSelectList(Role);
    this.userToUpdate = new UpdateUserDTO();
  }

  ngOnInit(): void {
    this.loadUser();
    this.loadPublishers();
  }

  loadUser() {
    this.userService.getUser(this.userName).subscribe({
      next: (data) => {
        this.userToUpdate = this.editUserAdapter.adapt(data);
        console.log(data);
      },
    });
  }

  loadPublishers() {
    this.publisherService.getAllPublishers().subscribe({
      next: (data) => (this.publishers = data),
    });
  }

  showPublishers() {
    return this.userToUpdate.role == Role.Publisher;
  }

  updateRole() {
    if (this.userToUpdate.role != Role.Publisher)
      this.userToUpdate.publisherName = null;
    this.userService.updateUser(this.userToUpdate).subscribe({
      next: () => this.router.navigateByUrl('/users'),
    });
  }
}
