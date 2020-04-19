import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, ValidationErrors, ValidatorFn, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  public message: string = ""
   

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    public router: Router
  ) { }

  ngOnInit(): void {
    
  }

  regForm = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10)
    ]],
    lastName: ['', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10)
    ]],
    dni: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(8)
    ]],
    phone: ['', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]],
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(8)
    ]],
    passwordConfirm: ['', [
      Validators.required
    ]]
  },
    {
      validators: userValidator.validPassword
    })


  userRegister() {

    if (this.regForm.valid) {

      const user = this.regForm.value;
      this.userService.register(user)
        .subscribe(
          res => {
            this.message = res.message;

            setTimeout(() => this.router.navigate(['ingreso']), 2000)
            
          },
          error => console.log(error)
        )
    }
  }


}

class userValidator {

  static validPassword: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password');
    const confirmarPassword = control.get('passwordConfirm');

    return password.value === confirmarPassword.value
      ? null
      : { 'notEquals': true };
  };
}