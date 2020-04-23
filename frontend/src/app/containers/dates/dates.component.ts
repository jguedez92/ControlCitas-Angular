import { AppointmentService } from './../../services/appointment.service';
import { UserService } from './../../services/user.service';
import { DateService } from './../../services/date.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

  public message: string
  public dates
  public users


  constructor(
    public fb: FormBuilder,
    public dateService: DateService,
    public userService: UserService,
    public appointmentService: AppointmentService
  ) { }

  ngOnInit(): void {

    this.userService.getAll()
      .subscribe(
        res => {
          this.users = res.users
          console.log(this.users)
        },
        error => console.log(error)
      );

    this.dateService.getEnabledDates()
      .subscribe(
        res => {
          this.dates = res.dates.map(dates => ({
            ...dates,
            appUsr: dates.Appointments.map(app => ({
              ...app,
              usrName: this.users.find(user => user.id == app.UserId)
            }))
          }))
          console.log(this.dates)
        },
        error => console.log(error)
      )
  }

  dateForm = this.fb.group({
    date: ['', Validators.required]
  })


  registerDate() {
    if (this.dateForm.valid) {

      const date = this.dateForm.value

      this.dateService.register(date)
        .subscribe(
          res => {
            this.message = res.message;
            setTimeout(() => location.href = "http://localhost:4300/fechas", 2000)
          },
          error => console.log(error)
        )

    }
  }

  disableDate(id) {
    const options = {
      id: id,
      status: "disabled"
    }
    this.dateService.changeStatus(options)
      .subscribe(
        res => {
          this.message = res.message
          setTimeout(() => location.href = "http://localhost:4300/fechas", 500)
        },
        error => console.log(error)
      )
  }


  finishAppoiontment(id) {

     let conf = confirm('esta seguro de FINALIZAR esta cita?')
    if (conf) {
      const option = {
        id,
        status: "finished",
        observations: "cita atendida en consulta"
      }
      this.appointmentService.update(option)
      .subscribe(
        res=>{
          this.message = res.message;
          setTimeout(() => location.href = "http://localhost:4300/fechas", 500)
        },
        error => console.log(error)
      )
    }
  }

  cancelAppoiontment(id) {
    let conf = confirm('esta seguro de CANCELAR esta cita?')
    if (conf) {
      const option = {
        id,
        status: "canceled",
        observations: "cita cancelada por ausencia"
      }
      this.appointmentService.update(option)
      .subscribe(
        res=>{
          this.message = res.message;
          setTimeout(() => location.href = "http://localhost:4300/fechas", 500)
        },
        error => console.log(error)
      )
    }
  }

}
