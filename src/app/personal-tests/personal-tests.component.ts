import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-personal-tests',
  templateUrl: './personal-tests.component.html',
  styleUrls: ['./personal-tests.component.css']
})
export class PersonalTestsComponent implements OnInit {

  faSearch = faMagnifyingGlass; 
  tests: Test[] = []; 

  constructor() { }

  ngOnInit(): void {
    this.tests =this.getTests(); 
  }

  getTests(): Test[]{
    return  [
      {
        id: 1, 
        name: "Test 1", 
        subject: "Subject 2", 
        imgURL: "https://www.verywellhealth.com/thmb/AN4Z27FMJn5lcC421bogmAPOi0c=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/fresh-grapefruit-on-chopping-board-1266067263-73c505565bed40ef8524f463e4fbea5f.jpg",
        score: 87, 
      }, 
      {
        id: 2, 
        name: "Test 2", 
        subject: "Subject 2", 
        imgURL: "https://www.bezzia.com/wp-content/uploads/2021/07/vintage-vs-retro.jpg",
        score: 53, 
      }, 
      {
        id: 3, 
        name: "Test 3", 
        subject: "Subject 3", 
        imgURL: "https://img.freepik.com/foto-gratis/vintage-color-paredes-madera-suelo-fondo_1249-936.jpg",
        score: 68, 
        
      },
      {
        id: 3, 
        name: "Test 4", 
        subject: "Subject 4", 
        imgURL: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1573578005i/28440999._SY540_.jpg",
        score: 76, 
        
      },
      
    ]; 
  }// end of getTests()
  
 

}

interface Test{ //TODO: rename to DecoratedTest
  id: number; 
  name: string; 
  subject: string; 
  imgURL: string; // for now 
  score: number;
}
