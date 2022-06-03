import { Component, Input, OnInit } from '@angular/core';
import { faTrash, faCopy, faImage, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms'; 


enum QuestionType {
  Radio = "Multiple Choice: Single Answer",
  Checkbox = "Mutliple Choice: Multiple Answers",
  Text = "Short Text",
}

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  // question : Question;  - current question; the object that the component is tied to (stores data?)
  faDelete = faTrash; 
  faCopy = faCopy; 
  faUploadImage = faImage; 
  faXmark = faXmark; 
  
  eQuestionType = QuestionType; // enum 
  defaultQuestionType = QuestionType.Radio; 

  @Input('group')
  public questionForm: FormGroup; 
  

  constructor(private fb: FormBuilder) { 
    this.questionForm = fb.group({ 
      caption: [''], 
      questionType: [this.eQuestionType.Radio], //default value for question type 
      options: fb.array([
        this.initOption()
        //new FormControl()
      ]),
      required: [true]
    });
  }
  initOption(){
    return this.fb.group({
      optionName: ['Hey!'], 
    })
  }

  ngOnInit(): void {
  }

  // getters: 
  // get questionName(){
  //   return this.questionForm.get("questionName"); 
  // }
  // get questionType(){
  //   return this.questionForm.get("questionType"); 
  // }
  // get options(){
  //   return this.questionForm.get("options") as FormArray; 
  // }
  // get required(){
  //   return this.questionForm.get("required"); 
  // }

  // add and remove options: 
  //  addOption(): FormControl{ // have to add option *to a specific question*
  //   let fc = new FormControl(); 
  //   this.options.push(fc); 
  //   return fc; 
  // }

  // removeOption(idx: number): void{ //option: FormControl
  //   this.options.removeAt(idx); 
  // }
}
