import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/Forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    message: new FormControl('', Validators.minLength(2))
  });

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get message() {
    return this.form.get('message');
  }
}
