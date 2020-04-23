import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user
  public viewModal: boolean = false
  public animationModal: string
  public formPhone: boolean; formEmail: boolean; formRole: boolean; formPassword: boolean;

  constructor(public userService: UserService) { }

  ngOnInit(): void {

    this.user = this.userService.getLocalStorageUser()

  }

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
        this.formPhone = true;
        this.formEmail = false;
        this.formRole = false;
        this.formPassword = false;
        break;

      case 'email':
        this.formPhone = false;
        this.formEmail = true
        this.formRole = false;
        this.formPassword = false;
        break;

      case 'role':
        this.formPhone = false;
        this.formEmail = false;
        this.formRole = true;
        this.formPassword = false;
        break;

      case 'password':
        this.formPhone = false;
        this.formEmail = false;
        this.formRole = false;
        this.formPassword = true;
        break;

      default:
        break;
    }


  }



}
