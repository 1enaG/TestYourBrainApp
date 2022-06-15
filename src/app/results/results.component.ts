import { Component, OnInit } from '@angular/core';
import { Test } from '../entities/test.model';
import { TestsService } from '../services/tests.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  tests: ResultsTest[] = []; 
  rawTests: Test[] = []; 
  constructor(private service: TestsService) { }

  ngOnInit(): void {
    this.service.getTests().subscribe(response =>{
      this.rawTests = response; 
      this.rawTestsToResultsTests(); 
    }
    );
  }
  //helper function (for now)
  rawTestsToResultsTests(){
    this.tests = []; 
    this.rawTests.forEach(test => {
      let dTest = {
        id: test.id, 
        name: test.caption, 
        subject: test.subject,
        imgURL: test.icon != "base64 image" ? test.icon : "https://www.verywellhealth.com/thmb/AN4Z27FMJn5lcC421bogmAPOi0c=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/fresh-grapefruit-on-chopping-board-1266067263-73c505565bed40ef8524f463e4fbea5f.jpg",
        date: 'june 14, 2022', 
        score: this.randomIntFromInterval(40, 100), 
         
      }; 
      this.tests.push(dTest); 
    });
    // fill [dashboard] tests array using raw tests
  }
  // helper: 
  randomIntFromInterval(min :number, max:number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


}
interface ResultsTest{ //TODO: rename to DecoratedTest
  id: number; 
  name: string; 
  subject: string; 
  imgURL: string; // for now 
  date: string; 
  score: number;
}
