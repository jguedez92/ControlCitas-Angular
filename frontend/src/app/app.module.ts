import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { AppoinmentsComponent } from './containers/appoinments/appoinments.component';
import { HttpClientModule } from '@angular/common/http';
import { DatesComponent } from './containers/dates/dates.component';
import { NoticesComponent } from './containers/notices/notices.component';
import { UsersComponent } from './containers/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AppoinmentsComponent,
    DatesComponent,
    NoticesComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
