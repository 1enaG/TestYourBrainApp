import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  passwordForm: FormGroup; 

  // dependency injection: 
  constructor(fb: FormBuilder) { //note: the form is built inside the ctor!  
    this.passwordForm = fb.group({
      oldPassword: ['', Validators.required, 
        PasswordValidators.passwordShouldBeCorrect
      ], 
      newPassword: ['', Validators.required], 
      confirmPassword: ['', Validators.required], 
    }, 
    {
      validator: PasswordValidators.passwordsShouldMatch
    }); 
  }

  get oldPassword(){
    return this.passwordForm.get("oldPassword"); 
  }
  get newPassword(){
    return this.passwordForm.get("newPassword"); 
  }
  get confirmPassword(){
    return this.passwordForm.get("confirmPassword"); 
  }


  ngOnInit(): void {
  }

  updatePassword(){

  }

}
