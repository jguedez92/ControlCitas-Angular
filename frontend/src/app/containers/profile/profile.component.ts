import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  public user

  constructor( public userService: UserService) { }

  ngOnInit(): void {

    this.user = this.userService.getLocalStorageUser()

  }

  

}
