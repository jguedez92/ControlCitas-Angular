import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient: HttpClient) { }

  register(user: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/users/register', user);
  }

  login(user: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/users/login', user);
  }

  updatePhone(user: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/users/changePhone', user);
  }

  updateEmail(user: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/users/changeEmail', user);
  }

  updatePassword(user: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/users/changePassword', user);
  }

  getAll(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/users/');
  }

  getOne(user): Observable<any> {
    return this.httpClient.post('http://localhost:3000/users/getOne', user);
  }

  getLocalStorageUser = () => {
    return JSON.parse(localStorage.getItem('user'))
  }


}


