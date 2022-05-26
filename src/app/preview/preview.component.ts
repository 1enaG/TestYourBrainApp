import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  testForm: FormGroup; 
  fb: FormBuilder; 
  



  constructor(fb: FormBuilder) {
    this.fb = fb; 
    this.testForm = fb.group({
      testName: [''], 
      testSubject: [''],
      questions: fb.array([
        //individual question (with options)
        fb.group({ //if it's within an array, it doesn't have a name, only an index! 
          questionName: [''], 
          questionType: [''], //default value for question type 
          options: fb.array([
            new FormControl(),
            new FormControl() 
          ]),
        })
      ]), 
    }); 
  }
  


  ngOnInit(): void {
  }
  
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

  getOptions(idx: number){
    return this.questions.at(idx).get('options') as FormArray; 
  }
  // CRUD: 
  addQuestion(){
    this.questions.push(
      this.fb.group({ 
        questionName: [''], 
        questionType: [''],  
        options: this.fb.array([]),
        // other fields? required etc  
      })
    ); //maybe has to have content inside? 
  }

  removeQuestion(idx: number){
    this.questions.removeAt(idx);
  }

  addOption(qIdx: number){
    this.getOptions(qIdx).push(new FormControl()); // I hope GetOptions return by reference, not a copy 
  }

  removeOption(qIdx: number, optIdx:number){ //qidx, optIdx 
    this.getOptions(qIdx).removeAt(optIdx); 
  }

}
