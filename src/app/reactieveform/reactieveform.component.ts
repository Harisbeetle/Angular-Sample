import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-reactieveform',
  templateUrl: './reactieveform.component.html',
  styleUrls: ['./reactieveform.component.css'],
})
export class ReactieveformComponent implements OnInit {
  signUpForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    gender: new FormControl(''),

    username: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),

    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
  });

  signUp() {
    console.log(this.signUpForm.value);
    const userData = this.signUpForm.value;
    this.ser.registerUser(userData).subscribe((res) => {
      console.log(res);
    });
  }

  get firstName() {
    return this.signUpForm.get('firstName');
  }

  get lastName() {
    return this.signUpForm.get('lastName');
  }

  get age() {
    return this.signUpForm.get('age');
  }

  get email() {
    return this.signUpForm.get('email');
  }
  get username() {
    return this.signUpForm.get('username');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get phone() {
    return this.signUpForm.get('phone');
  }

  constructor(public ser: ApiService) {}

  ngOnInit(): void {}
}
