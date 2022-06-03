import { TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms'; 
import { Test } from '../entities/test.interface';
import { TestsService } from '../services/tests.service';
import { RawTest } from '../entities/raw-test.interface';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  testForm: FormGroup; //our form model
  //test: Test; 
  //rawTest: RawTest; 
  myQuestions = [1, 2]; 
 
  
  constructor(private fb: FormBuilder, private service: TestsService) {
    // first, create the test object that will store the data! 
    // retrieve the data from backend and store it on object 
    // this.test = {
    //   id: 0, 
    //   testName: "My new test", 
    //   testSubject: "Software Engineering", 
    //   questions: []
    // }; 
    this.testForm = this.fb.group({
      caption: ['', Validators.required], 
      subject: [''],
      questions: this.fb.array([
        //this.myQuestions.forEach(element => {
          this.initQuestion(),//; 
          this.initQuestion()
        //})
      ]), 
    }); 

    // the diff between 'create' and 'edit' is that in create we start with an empty object and in edit - with one from backend
    // this.test = { //creating an empty object that we will then populate 
    //   id: 0, 
    //   caption: "",
    //   subject: "", 
    //   open: false, 
    //   icon: "",
    //   questions: []
    // }
  }
  ngOnInit(): void {
   this.retrieveData(); 
  }
  retrieveData(): void {
    this.service.getTest(1)
        .subscribe((res) => {
            // Assuming res has a structure like:
            // res = {
            //     field1: "some-string",
            //     field2: "other-string",
            //     subgroupName: {
            //         subfield2: "another-string"
            //     },
            // }
            // Values in res that don't line up to the form structure
            // are discarded. You can also pass in your own object you
            // construct ad-hoc.
            this.testForm.patchValue(res);
        });
}

  save(){ //model: Test
    //call API to save Test
    //console.log(this.test); //see what we've got 
  }


  initQuestion(){
    return this.fb.group({
      caption: ['', Validators.required], 
      //questionType: [''], //default value for question type 
      // options: this.fb.array([
      //   //this.addOption(), 
      // ])
    }); 
  }

  addQuestion(){
    const control = <FormArray>this.testForm.controls['questions'];
    control.push(this.initQuestion());
  }

  removeQuestion(qIdx: number){
    const control = <FormArray>this.testForm.controls['questions'];
    control.removeAt(qIdx);
  }
  // addOption(){
  //   return this.fb.group({
  //     optionName: ['Hey!'], 
  //   })
  // }
  
  
  // retrieveData(){
  //   this.service.getTest(1).subscribe(response =>{
  //     this.rawTest = response; 
  //     this.rawTestsToDashboardTests(); 
  //   }
  //   );
  // }

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
  getQuestion(idx: number){
    return this.questions.controls[idx] as FormGroup; 
  }

  getOptions(idx: number){
    return this.questions.at(idx).get('options') as FormArray; 
  }
 

  // removeQuestion(idx: number){
  //   this.questions.removeAt(idx);
  // }

  // addOption(qIdx: number){
  //   this.getOptions(qIdx).push(new FormControl()); // I hope GetOptions return by reference, not a copy 
  // }

  // removeOption(qIdx: number, optIdx:number){ //qidx, optIdx 
  //   this.getOptions(qIdx).removeAt(optIdx); 
  // }

}


// constructor(private fb: FormBuilder) {
//   this.testForm = fb.group({
//     testName: [''], 
//     testSubject: [''],
//     questions: fb.array([
//       //individual question (with options)
//       fb.group({ //if it's within an array, it doesn't have a name, only an index! 
//         questionName: [''], 
//         questionType: [''], //default value for question type 
//         options: fb.array([
//           new FormControl(),
//           new FormControl() 
//         ]),
//       })
//     ]), 
//   }); 
// }