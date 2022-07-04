import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../entities/test.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersUrl = "http://localhost:3000/users"; 

  constructor(private http: HttpClient) { }

  // all users for ranking list: 
  getUsers(){
    return this.http.get<User[]>(this.usersUrl); 
  }
  // single user for Account page: 
  getUser(id: number){ 
    return this.http.get<User>(this.usersUrl + "/" + id); 
  }
  addUser(){

  }

  updateUser(user: User){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(user);
    console.log(body); 
    this.http.put(this.usersUrl + "/" + user.id, body, {'headers':headers})
      .subscribe(response =>
        console.log(response)
      ); 
  }
  
}
