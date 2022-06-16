import { Component, OnInit } from '@angular/core';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  faUser = faCircleUser; 

  constructor(private authService: AuthService) { }

  get isLoggedIn(){
    return this.authService.isLoggedIn(); 
  }

  ngOnInit(): void {
  }

}


