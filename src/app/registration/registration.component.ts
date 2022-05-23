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
  constructor() { }

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

  ngOnInit(): void {
  }

}
