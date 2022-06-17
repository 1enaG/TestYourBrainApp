import { Component, OnInit } from '@angular/core';
import { TestsService } from '../services/tests.service';
import { Test } from '../entities/test.model';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

 tests : Test[] = []; 
  
  constructor(private service: TestsService) {
  
    this.service.getTests()
    .subscribe(response =>{
      this.tests = response; 
    })

  }
  ngOnInit(): void {
   
  }
 
}
