import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/shared/services/user/user.service';

@Component({
  selector: 'app-ban-type',
  templateUrl: './ban-type.component.html',
})
export class BanTypeComponent {
  constructor(private router: Router, private userService: UserService) {}

  banUser() {
    this.userService.banUser().subscribe(() => {
      this.router.navigate(['/games']);
    });
  }
}
