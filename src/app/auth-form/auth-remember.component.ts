import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-auth-remember',
  templateUrl: './auth-remember.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthRememberComponent implements OnInit {

  @Output()
  checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  onChecked(value: boolean) {
    this.checked.emit(value);
  }

}
