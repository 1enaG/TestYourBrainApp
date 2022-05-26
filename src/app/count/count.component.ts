import { Component, Input, OnInit } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  
  faUsers = faUsers; 
  @Input() count: number = 0; 

  constructor() { }

  ngOnInit(): void {
  }

}
