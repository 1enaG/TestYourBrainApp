import { AuthService } from '../services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]), 
    repeatPassword: new FormControl('', [Validators.required, Validators.minLength(6)]), 
    username: new FormControl('', [Validators.required, 
      UsernameValidators.cannotContainSpace], 
      UsernameValidators.shouldBeUnique), 
  }); 
  constructor(private authService :AuthService, 
    private router: Router) { }

  // properties 
  get email(){
    return this.regForm.get("email"); 
  }
  get password(){
    return this.regForm.get("password"); 
  }
  get repeatPassword(){
    return this.regForm.get("repeatPassword"); 
  }
  get username(){
    return this.regForm.get("username"); 
  }

  registration(credentials: any){
    let isValid = this.authService.registration(credentials); //actually should do it through SUBSCRIBE!
    if(isValid){
      this.router.navigate(["/dashboard-component"]); //works 
    }

  }

  ngOnInit(): void {
  }

}
