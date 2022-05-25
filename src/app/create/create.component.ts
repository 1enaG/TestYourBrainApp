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

  fb: FormBuilder; 
  faDelete = faTrash;
  faCopy = faCopy; 
  faUploadImage = faImage; 
  faXmark = faXmark; 
  
  eQuestionType = QuestionType; // enum 

  defaultQuestionType = QuestionType.Radio; 
  testForm: FormGroup; 
  //questionForm: FormGroup;  

    // getters to easily access form controls 
  get testName(){
    return this.testForm.get("testName"); 
  }
  get testSubject(){
    return this.testForm.get("testSubject"); 
  }
  get questions(){
    return this.testForm.get("questions") as FormArray; 
  }
  // get questionName(){
    
  //   return this.testForm.get("questionName"); 
  //   //return this.questionForm.get("questionName"); 
  // }
  // get options(){
  //   return this.questionForm.get("options") as FormArray; 
  // }
  

  constructor(fb: FormBuilder) {
    // this.questionForm = new FormGroup({
    //   questionName: new FormControl(''), 
    //   options: new FormArray([
    //     //this.addOption() 
    //   ])
    // }); 
    this.fb = fb; // so it can be used anywhere in the class, not just in ctor
    this.testForm = fb.group({
      testName: [''], 
      testSubject: [''],
      questions: fb.array([
        //individual question (with options)
        fb.group({ //if it's within an array, it doesn't have a name, only an index! 
          questionName: [''], 
          questionType: [this.eQuestionType.Radio], //default value for question type 
          options: fb.array([]),
          // other fields? required etc  
        })
      ]), 
    }); 
  

   }

  ngOnInit(): void {
  }

  addQuestion(){
    this.questions.push(
      this.fb.group({ 
        questionName: [''], 
        questionType: [this.eQuestionType.Radio],  
        options: this.fb.array([]),
        // other fields? required etc  
      })
    ); //maybe has to have content inside? 
  }

  removeQuestion(idx: number){
    this.questions.removeAt(idx);
  }
  // method to dynamically insert options into the FormArray: 
  // addOption(): FormControl{ // have to add option *to a specific question*
  //   let fc = new FormControl(); 
  //   this.options.push(fc); 
  //   return fc; 
  // }

  // removeOption(idx: number): void{ //option: FormControl
  //   //let index = this.options.controls.indexOf(option); 
  //   //this.options.removeAt(index); 
  //   this.options.removeAt(idx); 
  // }

  onQuestionTypeChange(){

  }

  // TODO: Question Validation: options are not the same 

}


  // questionTypes = [
  //     {id: 1, name: 'Multiple Choice: Single Answer'}, 
  //     {id: 2, name: 'Multiple Choice: Multiple Answers'}, 
  //     {id: 3, name: 'Short Text'}, 
  //   ]; 



    // this.testForm = new FormGroup({
    //   testName: new FormControl(''), 
    //   testSubject: new FormControl(''), 
    //   questions: new FormArray([

    //     questionForm: new FormGroup({
    //       questionName: new FormControl(''), 
    //       options: new FormArray([
    //           //this.addOption() 
    //         ])

    //     })
    //   ])


  //  }); 