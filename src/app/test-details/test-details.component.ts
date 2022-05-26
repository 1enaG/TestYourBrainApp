import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {

  @Input() name: string = ''; 
  @Input() subject: string = ''; 
  @Input() imgURL: string  = ''; 

  constructor() { }

  ngOnInit(): void {
  }

}
