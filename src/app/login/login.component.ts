import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(private readonly fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      uEmail: ['', [Validators.required, Validators.email]],
      uPassword: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.form.valid) {
      //Hardcoding the Values here as this project currently does not have a back-end
      const fixedEmail = 'admin@gmail.com';
      const fixedPassword = 'admin';

      if (
        fixedEmail === this.form.get('uEmail')?.value &&
        fixedPassword === this.form.get('uPassword')?.value
      ) {
        //Navigating to home page on successful Route
        this.router.navigate(['/home']);
      } else {
        console.log('failure');
      }
    } else {
      console.log('There is a problem with the form');
    }
  }
}
