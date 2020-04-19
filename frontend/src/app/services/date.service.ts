import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor( public httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/dates/');
  }
  getEnabledDates(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/dates/enabled');
  }
  register(date: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/dates/register', date);
  }
  update(date: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/dates/changeStatus', date);
  }
  

}
