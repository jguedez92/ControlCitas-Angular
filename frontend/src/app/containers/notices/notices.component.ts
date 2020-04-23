import { UserService } from 'src/app/services/user.service';
import { NewsService } from './../../services/news.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
})
export class NoticesComponent implements OnInit {

  public message: string = ""
  public news:Object
  public user:any


  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    public newsService: NewsService,
    public router: Router
  ) { }

  ngOnInit(): void {

    this.user = this.userService.getLocalStorageUser();

    this.newsService.getAll()
    .subscribe(
      res=>{
        this.news = res.news.reverse()
        console.log(this.news)
      },
      error => console.log(error)
    )
  }

  newsForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required]
  })

  newsRegister() {

    if (this.newsForm.valid) {
      const news = this.newsForm.value;
      news.userId = this.user.id;
      
      this.newsService.register(news)
        .subscribe(
          res => {
            this.message = res.message;
            setTimeout(() => location.href = "http://localhost:4300/noticias", 1000)
          },
          error => console.log(error)
        )
    }
  }

}
