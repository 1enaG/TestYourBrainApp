import { Component, OnInit } from '@angular/core';
import { faCoffee, faUsers, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  faUsers = faUsers; 
  faEdit = faPenToSquare; 
  faDelete = faTrash; 

  isFav = false;  
  lime = "bg-lime-600 score-outer-circle"; 
  violet = "bg-violet-600 score-outer-circle"; 


  constructor() { }

  ngOnInit(): void {
  }
  // onCircleClick(): void {
  //     this.isFav = !this.isFav; 
  //     console.log("Circle was clicked!"); 
  // }

}

