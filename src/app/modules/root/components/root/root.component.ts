import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/modules/shared/services/customer/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
})
export class RootComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    //this.login();
  }

  login() {
    if (!this.customerService.isAuthorized()) {
      this.customerService.login();
    }
  }
}
