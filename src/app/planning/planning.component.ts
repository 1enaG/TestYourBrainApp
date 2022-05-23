import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  //enum StatusOptions { Public = 0, Private = 1}; 
  statusOptions: string[] = [
    "Public", 
    "Private"
  ]; 
  selectedStatus = this.statusOptions[0]; 
  tests: Test[] = []; 


  constructor() { }

  ngOnInit(): void {
    this.tests = this.getTests(); 
  }

  getTests() :Test[]{
    return [
      {
        id: 1,
        name: "Test 1", 
        subject: "Subject", 
        imgURL: "https://www.verywellhealth.com/thmb/AN4Z27FMJn5lcC421bogmAPOi0c=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/fresh-grapefruit-on-chopping-board-1266067263-73c505565bed40ef8524f463e4fbea5f.jpg", 
        status:  "Public", 
      },

      {
        id: 2,
        name: "Test 2", 
        subject: "Subject", 
        imgURL: "https://www.bezzia.com/wp-content/uploads/2021/07/vintage-vs-retro.jpg", 
        status: "Public", 
      },

      {
        id: 3,
        name: "Test 3", 
        subject: "Subject", 
        imgURL: "https://img.freepik.com/foto-gratis/vintage-color-paredes-madera-suelo-fondo_1249-936.jpg", 
        status: "Private",
      },

    ]; 
  }
}

interface Test{ //TODO: rename to DecoratedTest
  id: number; 
  name: string; 
  subject: string; 
  imgURL: string; // for now 
  status: string;  
}