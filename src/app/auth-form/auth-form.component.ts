import {Component, EventEmitter, ContentChild, AfterContentInit, OnInit, Output} from '@angular/core';

import { AuthRememberComponent } from './auth-remember.component';

import { User } from './models/auth-form.interface';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit, AfterContentInit {

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;

  showMessage: boolean;

  constructor() { }

  ngOnInit() { }

  ngAfterContentInit(): void {
    if (this.remember) {
      this.remember.checked.subscribe(((checked: boolean) => this.showMessage = checked));
    }
  }

  onSubmit(event: User) {
    this.submitted.emit(event);
  }

}
