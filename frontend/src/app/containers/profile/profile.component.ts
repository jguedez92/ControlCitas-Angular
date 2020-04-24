import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public userLs;
  public userBd;
  public viewModal: boolean = false
  public animationModal: string; message: string;
  public viewPhone: boolean; viewEmail: boolean; viewPassword: boolean;

  constructor(
    public userService: UserService,
    public fb: FormBuilder
  ) { }

  mostrarModal(opt?) {
    if (!this.viewModal) {
      this.viewModal = true
      this.animationModal = "bounceInUp"
    } else {
      this.animationModal = "bounceOutUp"
      setTimeout(() => {
        this.viewModal = false
      }, 700);
    }
    switch (opt) {
      case 'phone':
        this.viewPhone = true;
        this.viewEmail = false;
        this.viewPassword = false;
        break;

      case 'email':
        this.viewPhone = false;
        this.viewEmail = true
        this.viewPassword = false;
        break;

      case 'role':
        this.viewPhone = false;
        this.viewEmail = false;
        this.viewPassword = false;
        break;

      case 'password':
        this.viewPhone = false;
        this.viewEmail = false;
        this.viewPassword = true;
        break;

      default:
        break;
    }
  }

  formPhone = this.fb.group({
    phone: ['',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]]
  })

  formEmail = this.fb.group({
    email: ['',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.email
      ]]
  })

  formPassword = this.fb.group({
    password: ['',
      [
        Validators.required,
        Validators.minLength(8)
      ]],
    confirm: ['', Validators.required]
  },
    {
      validators: userValidator.validPassword
    })


  ngOnInit(): void {

    this.userLs = this.userService.getLocalStorageUser()

    const user = {
      id: this.userLs.id
    }
    this.userService.getOne(user)
      .subscribe(
        res => {
          this.userBd = res.user

        },
        error => console.log(error)
      )

  }

  actualizarDatos(opt) {
    if (opt == 'phone') {
      if (this.formPhone.valid) {

        const user = this.formPhone.value;
        user.id = this.userLs.id
        this.userService.updatePhone(user)
          .subscribe(
            res => {
              this.message = res.message;
              setTimeout(() => {
                location.href = "http://localhost:4300/perfil"
              }, 1000);
            },
            error => console.log(error)
          )
      }
    }

    if (opt == 'email') {
      if (this.formEmail.valid) {

        const user = this.formEmail.value;
        user.id = this.userLs.id
        this.userService.updateEmail(user)
          .subscribe(
            res => {
              this.message = res.message;
              setTimeout(() => {
                location.href = "http://localhost:4300/perfil"
              }, 1000);
            },
            error => console.log(error)
          )
      }
    }

    if (opt == 'password') {
      if (this.formPassword.valid) {

        const user = this.formPassword.value;
        user.id = this.userLs.id
        this.userService.updatePassword(user)
          .subscribe(
            res => {
              this.message = res.message;
              setTimeout(() => {
                location.href = "http://localhost:4300/perfil"
              }, 1000);
            },
            error => console.log(error)
          )
      }
    }
  }
}

class userValidator {

  static validPassword: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password');
    const confirmarPassword = control.get('confirm');

    return password.value === confirmarPassword.value
      ? null
      : { 'notEquals': true };
  };
}
