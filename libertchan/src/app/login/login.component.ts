import { Component, OnInit } from '@angular/core';

import { AuthentificationService } from '../Auth/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  invalidLogin = false;

  constructor(
    private router: Router,
    public loginservice: AuthentificationService
  ) {}

  ngOnInit() {}
  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)) {
      this.router.navigate(['']);
      this.invalidLogin = false;
    } else this.invalidLogin = true;
  }
}
