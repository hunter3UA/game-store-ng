import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterDTO } from 'src/app/modules/core/api-models/auth/register.dto';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
import { AuthService } from 'src/app/modules/shared/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  public registerDto: RegisterDTO;
  constructor(
    private authService: AuthService,
    private router: Router,
    private errorService: ErrorHandlerService
  ) {
    this.registerDto = new RegisterDTO();
  }

  ngOnInit(): void {}

  createUser() {
    this.authService.register(this.registerDto).subscribe({
      next: () => {
        this.router.navigateByUrl("'home'");
      },
      error: (error) => this.errorService.handleError(error),
    });
  }
}
