import { AppointmentService } from './../../services/appointment.service';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.component.html',
  styleUrls: ['./appoinments.component.scss']
})
export class AppoinmentsComponent implements OnInit {

  public dates
  public userApp
  public message: string
  public appExist: boolean = false
  public dateReserved; appReserved;


  constructor(
    public dateService: DateService,
    public userService: UserService,
    public appointmentService: AppointmentService
  ) { }

  public dia: Array<string> = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

  ngOnInit(): void {

    this.dateService.getEnabledDates()
      .subscribe(
        res => {
          this.dates = res.dates.map(date => ({
            ...date,
            day: new Date(date.date).getDay(),
            plazas: 8 - (date.Appointments.filter(app => app.status == "actived").length)
          }))
          const user = this.userService.getLocalStorageUser()
          this.dateReserved = this.dates.filter(date => date.Appointments.find(appoint => appoint.UserId == user.id && appoint.status == 'actived'))
          
          console.log(this.dateReserved)
          if (this.dateReserved.length > 0) {
            this.appExist = true;
            this.appReserved = this.dateReserved[this.dateReserved.length - 1].Appointments.filter(appoint => appoint.UserId == user.id && appoint.status == 'actived')
          }else{
            console.log(this.appExist)
          }

        },
        error => console.log(error)
      )

  }

  registerAppoint(date) {

    const user = this.userService.getLocalStorageUser()

    const appoint = {
      UserId: user.id,
      DateId: date.id
    }

    this.appointmentService.register(appoint)
      .subscribe(
        res => {
          this.message = res.message;
          setTimeout(() => {
            location.href = "http://localhost:4300/citas"
          }, 2500)

        },
        error => console.log(error)
      )

  }

  cancelAppoint(idApp) {
    const appoint = {
      id: idApp,
      status: "postponed",
      observations: "Cancelado por el usuario"
    }
    this.appointmentService.update(appoint)
      .subscribe(
        res => {
          this.message = res.message
          setTimeout(() => {
            location.href = "http://localhost:4300/citas"
          }, 2500)
        }
      )
  }

}
