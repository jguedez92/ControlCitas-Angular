import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor( public httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/appoints/');
  }

  getUserApp(appoint: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/appoints/getUserApp', appoint);
  }

  register(appoint: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/appoints/register', appoint);
  }
  
  update(appoint: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/appoints/update', appoint);
  }
}
