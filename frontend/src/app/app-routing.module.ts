import { UsersComponent } from './containers/users/users.component';
import { NoticesComponent } from './containers/notices/notices.component';
import { DatesComponent } from './containers/dates/dates.component';
import { AppoinmentsComponent } from './containers/appoinments/appoinments.component';
import { LoginComponent } from './containers/login/login.component';
import { HomeComponent } from './containers/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './containers/register/register.component';
import { ProfileComponent } from './containers/profile/profile.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'ingreso',component:LoginComponent},
  {path:'registro',component:RegisterComponent},
  {path:'perfil',component:ProfileComponent},
  {path:'citas',component:AppoinmentsComponent},
  {path:'fechas',component:DatesComponent},
  {path:'noticias',component:NoticesComponent},
  {path:'usuarios',component:UsersComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
