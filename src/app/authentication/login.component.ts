import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidCredentialMsg: string;
  constructor(private authService: AuthService, private router: Router) {}
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  onFormSubmit() {
    const uname = this.loginForm.get('username').value;
    const pwd = this.loginForm.get('password').value;
    this.authService
      .isUserAuthenticated(uname, pwd)
      .subscribe(authenticated => {
        if (authenticated) {
          const url = this.authService.getRedirectUrl();
          console.log('Redirect Url:' + url);
          this.router.navigate([url]);
        } else {
          this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
        }
      });
  }
}
