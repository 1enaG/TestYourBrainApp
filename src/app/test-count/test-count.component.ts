import { Component, Input, OnInit } from '@angular/core';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'test-count',
  templateUrl: './test-count.component.html',
  styleUrls: ['./test-count.component.css']
})
export class TestCountComponent implements OnInit {

  faTest = faListCheck; 
  @Input() count: number = 0; 

  constructor() { }

  ngOnInit(): void {
  }

}
