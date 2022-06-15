import { TestsService } from './../services/tests.service';
import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { RawTest } from '../entities/raw-test.interface';
import { Test } from '../entities/test.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faEdit = faPenToSquare; 
  faDelete = faTrash; 

  tests: DashboardTest[] = []; 
  rawTests: Test[] = []; 


  constructor(private service: TestsService) { }

  ngOnInit(): void {
    //this.tests =this.getTests();
    this.service.getTests().subscribe(response =>{
        this.rawTests = response; 
        this.rawTestsToDashboardTests(); 
      }
      );
  }
  deleteTest(test: DashboardTest){
    this.service.deleteTest(test.id) //on delete completed, remove from the array in component!
      .subscribe(response => {
        let index = this.tests.indexOf(test);
        this.tests.splice(index, 1); 
      });

  }


  //helper function (for now)
  rawTestsToDashboardTests(){
    this.tests = []; 
    this.rawTests.forEach(test => {
      let dTest = {
        id: test.id, 
        name: test.caption, 
        subject: test.subject,
        imgURL: test.icon != "base64 image" ? test.icon : "https://www.verywellhealth.com/thmb/AN4Z27FMJn5lcC421bogmAPOi0c=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/fresh-grapefruit-on-chopping-board-1266067263-73c505565bed40ef8524f463e4fbea5f.jpg",
        avgScore: this.randomIntFromInterval(40, 100), 
        count: this.randomIntFromInterval(2, 60), 
      }; 
      this.tests.push(dTest); 
    });
    // fill [dashboard] tests array using raw tests
  }

  // helper: 
  randomIntFromInterval(min :number, max:number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  //local dummy data: 
  getTests(): DashboardTest[]{
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
  

}





interface DashboardTest{ //TODO: rename to DecoratedTest
  id: number; 
  name: string; 
  subject: string; 
  imgURL: string; // for now 
  count: number; 
  avgScore: number;
}
