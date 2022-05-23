import { Component, OnInit } from '@angular/core';
import {  faTrash, faCopy, faImage, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  faDelete = faTrash;
  faCopy = faCopy; 
  faUploadImage = faImage; 
  faXmark = faXmark; 

  questionTypes = [
      {id: 1, name: 'Multiple Choice: Single Answer'}, 
      {id: 1, name: 'Multiple Choice: Multiple Answers'}, 
      {id: 1, name: 'Short Text'}, 
      {id: 1, name: 'Multiline Text'}, 
    ]; 
  defaultQuestionType = this.questionTypes[0]; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
