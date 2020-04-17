import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient: HttpClient) { }

  public lsUser: object;

  register(user: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/users/register', user);
  }
  login(user: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/users/login', user);
  }

  getLocalStorageUser = () => {
    
      return JSON.parse(localStorage.getItem('user'))
  
  }


}


