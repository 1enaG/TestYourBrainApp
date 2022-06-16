import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(){
    // check if the user is logged in or not 
    if(this.authService.isLoggedIn()) 
      return true; 
    else{
      this.router.navigate(['/login-component']); 
      return false; 
    }
  }
}
