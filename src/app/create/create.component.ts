import { Component, OnInit } from '@angular/core';
import {  faTrash, faCopy, faImage, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms'; 

enum QuestionType {
  Radio = "Multiple Choice: Single Answer",
  Checkbox = "Mutliple Choice: Multiple Answers",
  Text = "Short Text",
}
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
  
  eQuestionType = QuestionType; // enum 

  defaultQuestionType = QuestionType.Radio; 
  //testForm: FormGroup; 
  questionForm: FormGroup;  

    // getters to easily access form controls 
  get questionName(){
    return this.questionForm.get("questionName"); 
  }
  get options(){
    return this.questionForm.get("options") as FormArray; 
  }
  

  constructor(fb: FormBuilder) {
    this.questionForm = new FormGroup({
      questionName: new FormControl(''), 
      options: new FormArray([
        //this.addOption() 
      ])
    }); 

  //   this.testForm = new FormGroup({
  //     testName: new FormControl(''), 

  //  }); 

   }

  ngOnInit(): void {
  }

  // method to dynamically insert options into the FormArray: 
  addOption(): FormControl{
    let fc = new FormControl(); 
    this.options.push(fc); 
    return fc; 
  }

  removeOption(idx: number): void{ //option: FormControl
    //let index = this.options.controls.indexOf(option); 
    //this.options.removeAt(index); 
    this.options.removeAt(idx); 
  }

  onQuestionTypeChange(){

  }

  // TODO: Question Validation: options are not the same 

}


  // questionTypes = [
  //     {id: 1, name: 'Multiple Choice: Single Answer'}, 
  //     {id: 2, name: 'Multiple Choice: Multiple Answers'}, 
  //     {id: 3, name: 'Short Text'}, 
  //   ]; 