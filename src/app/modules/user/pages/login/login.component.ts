import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { LoginDTO } from 'src/app/modules/core/api-models/auth/login.dto';
import { ErrorHandlerService } from 'src/app/modules/error/services/error-handler.service';
import { AuthService } from 'src/app/modules/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public loginDTO: LoginDTO;
  public error: string;

  constructor(private authService: AuthService, private router: Router) {
    this.loginDTO = new LoginDTO();
  }

  ngOnInit(): void {}

  public login() {
    this.authService.login(this.loginDTO).subscribe({
      next: (data) => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        if (error.status == 404) this.error = 'User not found';
        console.log(this.error);
      },
    });
  }
}
