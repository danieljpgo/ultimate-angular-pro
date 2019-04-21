import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from './models/auth-form.interface';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  @Output()
  submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit() { }

  onSubmit(event: User) {
    this.submitted.emit(event);
  }

}
