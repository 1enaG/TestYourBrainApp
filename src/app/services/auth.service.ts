import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // make a request to the backend to check the email and password 
  authenticate(credentials: any){
    // actual implementation should look smth like this: 
    // this.http.post('/api/authenticate', 
    //   JSON.stringify(credentials)).map(response =>{
    //     // response either contains null or a token 
    //     let result = response.json();
    //     if(result && result.token){
    //       localStorage.setItem('token', result.token); 
    //       return true; 
    //     } 
    //     else{
    //       return false; 
    //     }
    //   }); 

    //console.log(JSON.stringify(credentials)); 
    if(credentials.email =="olenagroza@gmail.com" && credentials.password == "123456"){
      localStorage.setItem("token", "true"); 
      return true; 
    }
      
    else {
      return false; 
    }
  } // end of authenticate 

  isLoggedIn():boolean{
    //if we have a token in local storage and it is not expired, we return true 
    //return this.loggedIn; 
    if(localStorage.getItem("token") == "true"){
      return true; 
    }else {
      return false; 
    }
  }

  logout(){
    localStorage.clear();  
  }
}
