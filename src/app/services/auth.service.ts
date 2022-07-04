import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token, User } from '../entities/test.model';
import {map} from 'rxjs/operators';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "https://localhost:7199/users-management/"; //base URL 
  protected headers: HttpHeaders;

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders()
        .set('Content-Type', 'application/json');
  }

  // make a request to the backend to check the email and password 
  authenticate(credentials: any){
    let result = this.http.get<Token>(this.url + "login?email=" + credentials.email + "&password=" + credentials.password, { headers: this.headers }).pipe(map(res => {
      try { return res; }
      catch (err) { console.log(err); return res; }
    })).subscribe(
      val => 
      {
        console.log(val.accessToken);
        localStorage.setItem('token', JSON.stringify(val));
      },
        error=> console.log("error"),
        () => console.log("complete")
      );
    
    return this.isLoggedIn()
  }

  registration(credentials: any) {
    let user: User = {} as User;
    user.login = credentials.username;
    user.password = credentials.password;
    user.email = credentials.email;
    user.avatar = "";
    user.country = "";
    user.externalid = "";
    user.lastName = "";
    user.firstName = "";
    let result = this.http.post<User>(this.url + "users/signup", user, { headers: this.headers }).pipe(map(res => {
      try { return res; }
      catch (err) { console.log(err); return res; }
    })).subscribe(
      val => 
      {
        console.log(val);
        credentials.email = val.email;
        return this.authenticate(credentials);
      },
      error=> console.log("error"),
      () => console.log("complete"));
    
    return this.isLoggedIn();
  }

  isLoggedIn():boolean{
    //if we have a token in local storage and it is not expired, we return true 
    //return this.loggedIn; 
    if(localStorage.getItem("token") != ""){
      return true; 
    }else {
      return false; 
    }
  }

  logout(){
    localStorage.clear();  
  }
}
