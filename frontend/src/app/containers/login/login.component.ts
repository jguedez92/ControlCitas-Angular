import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public message: string = "";
  public isSuccess: boolean = false;

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  logForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  userLogin() {

    if (this.logForm.valid) {

      const user = this.logForm.value;
      this.userService.login(user)
        .subscribe(
          res => {

            this.isSuccess = true
            this.message = res.message
            console.log(res.user)
            localStorage.setItem('user', JSON.stringify(res.user));
            localStorage.setItem('token', res.token);

            setTimeout(() => location.href = "http://localhost:4300/", 500)
          },
          error => {
            this.message = error.error.message
          }
        )
    }
  }
}
