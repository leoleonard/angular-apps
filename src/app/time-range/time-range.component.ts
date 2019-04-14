import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {UsernameValidators} from './username.validators';


@Component({
  selector: 'app-time-range',
  templateUrl: './time-range.component.html',
  styleUrls: ['./time-range.component.css']
})

export class TimeRangeComponent {
  form = new FormGroup({
    username: new FormControl('',
      [Validators.required,
        UsernameValidators.containNoSpace,
        UsernameValidators.shouldBeUnique
      ]),
    password: new FormControl('', Validators.required),
  });

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

}
