import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public className:string = 'd-flex toggled';
  public transitionClass:string = "bounceInRight";
  public userExist:boolean = false;

  title = 'frontend';

  CambioClase(event){
    if(this.className == 'd-flex toggled'){
      this.className = 'd-flex';
    }else{
      this.className = 'd-flex toggled'
    } 
  }

  changeTransition(){
    if(this.transitionClass = "bounceInRight"){
      this.transitionClass = "bounceOutLeft";
    }
  }


}

/*
*/