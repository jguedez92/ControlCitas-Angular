import { NewsService } from './../../services/news.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy { 
  
  public animation:string
  public news


  constructor(public newsService:NewsService) { }

  ngOnInit(): void {
    this.animation = "bounceInRight"

    this.newsService.getAll()
    .subscribe(
      res=>{
        this.news = res.news.reverse()
        console.log(this.news)
      },
      error => console.log(error)
    )
  }

  ngOnDestroy(): void{
    
    this.animation = "bounceOutLeft"
    
  }


}
