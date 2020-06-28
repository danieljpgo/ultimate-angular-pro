import { Component } from '@angular/core';

import {User} from './auth-form/models/auth-form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ultimate-angular-pro';

  rememberMe: boolean = false;

  rememberUser(remember: boolean) {
    console.log(remember);
    this.rememberMe = remember;
  }

  createUser(user: User) {
    console.log('Created', user);
  }

  loginUser(user: User) {
    console.log('login', user, this.rememberMe);
  }
}
