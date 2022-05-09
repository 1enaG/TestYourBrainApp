import { Component, OnInit } from '@angular/core';
import {  faTrash, faCopy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  faDelete = faTrash;
  faCopy = faCopy; 
  constructor() { }

  ngOnInit(): void {
  }

}
