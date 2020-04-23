import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  constructor(public httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/news/enabled');
  }

  register(user: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/news/register', user);
  }

  changeStatus(options: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/news/changeStatus', options);
  }

}
