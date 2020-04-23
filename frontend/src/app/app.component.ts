import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public className:string = 'd-flex toggled';
  public userExist:boolean
  public lsUser:any
  public isAdmin:boolean = false;

  title = 'frontend';
  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.lsUser = this.userService.getLocalStorageUser()
    if(this.lsUser){
      if(this.lsUser.role == "admin"){
        this.isAdmin = true
      }
    }
  }

  CambioClase(event){
    if(this.className == 'd-flex toggled'){
      this.className = 'd-flex';
    }else{
      this.className = 'd-flex toggled'
    } 
  }

  disconect(){
    location.href = "http://localhost:4300/"
    localStorage.clear();
  }




}

/*
*/