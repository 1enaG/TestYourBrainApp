import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { NavigationEnd, Router } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    faHeart = faHeart; 
    loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required), 
  }); 

  get email(){
    return this.loginForm.get("email"); 
  }
  get password(){
    return this.loginForm.get("password"); 
  }
  constructor(private authService :AuthService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  login(credentials: any){
    // let isValid = false; // TODO: call the server here
    // if(!isValid){
    //   this.loginForm.setErrors({ invalidLogin: true })
    // }
    let isValid = this.authService.authenticate(credentials); //actually should do it through SUBSCRIBE!
    if(isValid){
      this.router.navigate(["/dashboard-component"]); //works 
    }else{
      this.loginForm.setErrors({ invalidLogin: true }); 
    }

       

  }

}
