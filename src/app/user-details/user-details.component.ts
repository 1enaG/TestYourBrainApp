import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() username: string = ''; 
  @Input() firstName: string = ''; 
  @Input() lastName: string = ''; 
  @Input() imgURL: string  = ''; 
  constructor() { }

  ngOnInit(): void {
  }

}
