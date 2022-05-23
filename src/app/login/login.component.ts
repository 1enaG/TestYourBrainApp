import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

  login(){
    let isValid = false; // TODO: call the server here
    if(!isValid){
      this.loginForm.setErrors({ invalidLogin: true })
    }
  }

}
