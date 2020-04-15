import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  regForm = new FormGroup({
    vName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10)
    ]),
    vLastName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10)
    ]),
    vDni: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(8)
    ]),
    vPhone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
    vEmail: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    vPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    vPasswordConfirm: new FormControl('', [
      Validators.required
    ])
  },{
    validators: userValidator.validPassword
  })


  
}

class userValidator{

  static validPassword:  ValidatorFn  =  (control:  FormGroup):  ValidationErrors  |  null  =>  {
    const password = control.get('vPassword');
    const confirmarPassword = control.get('vPasswordConfirm');
  
    return password.value === confirmarPassword.value
      ?  null
      :  {  'notEquals':  true  };
  };
}
