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

  // isFav = false;  
  // lime = "bg-lime-600 score-outer-circle"; 
  // violet = "bg-violet-600 score-outer-circle"; 

  tests: Test[] = []; 

  constructor() { }

  ngOnInit(): void {
    this.tests =this.getTests(); 
  }
  // onCircleClick(): void {
  //     this.isFav = !this.isFav; 
  //     console.log("Circle was clicked!"); 
  // }
  getTests(): Test[]{
    return  [
      {
        id: 1, 
        name: "Test 1", 
        subject: "Subject 2", 
        imgURL: "https://www.verywellhealth.com/thmb/AN4Z27FMJn5lcC421bogmAPOi0c=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/fresh-grapefruit-on-chopping-board-1266067263-73c505565bed40ef8524f463e4fbea5f.jpg",
        avgScore: 87, 
        count: 35, 
      }, 
      {
        id: 2, 
        name: "Test 2", 
        subject: "Subject 2", 
        imgURL: "https://www.bezzia.com/wp-content/uploads/2021/07/vintage-vs-retro.jpg",
        avgScore: 53, 
        count: 12, 
      }, 
      {
        id: 3, 
        name: "Test 3", 
        subject: "Subject 3", 
        imgURL: "https://img.freepik.com/foto-gratis/vintage-color-paredes-madera-suelo-fondo_1249-936.jpg",
        avgScore: 68, 
        count: 102, 
      },
      {
        id: 3, 
        name: "Test 4", 
        subject: "Subject 4", 
        imgURL: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1573578005i/28440999._SY540_.jpg",
        avgScore: 76, 
        count: 13, 
      },
      
    ]; 
  }// end of getTests()
  getColorClass(score: number): string{
    if(score > 90){
      return "bg-emerald-600";
    }
    if(score > 80){
      return  "bg-green-600"; 
    }
    if(score > 70){
      return  "bg-lime-600"; 
    }
    if(score > 60){
      return  "bg-lime-500"; 
    }
    if(score > 50){
      return  "bg-yellow-400"; 
    }
    if(score > 40){
      return  "bg-amber-500"; 
    }
    if(score > 30){
      return  "bg-orange-500"; 
    }
    if(score > 20){
      return  "bg-orange-600"; 
    }
    if(score > 10){
      return  "bg-red-600"; 
    }
    else return "bg-red-700"; 
  }

}





interface Test{ //TODO: rename to DecoratedTest
  id: number; 
  name: string; 
  subject: string; 
  imgURL: string; // for now 
  count: number; 
  avgScore: number;
}
