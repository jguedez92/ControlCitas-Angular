import { DateService } from './../../services/date.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

  public message:string
  public dates:object
  

  constructor(public fb:FormBuilder, public dateService: DateService) { }

  ngOnInit(): void {

    this.dateService.getEnabledDates()
    .subscribe(
      res=>{
        this.dates = res.dates
        console.log(this.dates)
      },
      error => console.log(error)
    )

  

  }

  dateForm = this.fb.group({
    date: ['', Validators.required]
  })

  registerDate(){
    if(this.dateForm.valid){
      
      const date = this.dateForm.value

      this.dateService.register(date)
      .subscribe(
        res => {
          this.message = res.message;
          setTimeout( ()=>{
            setTimeout(() => location.href = "http://localhost:4300/fechas", 500)
          }, 2500)
          
        },
        error => console.log(error)
      )

    }
  }

}
