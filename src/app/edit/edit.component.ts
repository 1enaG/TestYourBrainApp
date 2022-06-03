import { Component, OnInit } from '@angular/core';
import { UtilService } from '../services/util.service';
import { FormArray, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { TestsService } from '../services/tests.service';
import { SCROLL_THROTTLE_MS } from '@angular/material/tooltip';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  //testForm$: Observable<FormGroup> = this.util.getTestForm(); 
  
  testForm!: FormGroup; 
  
  constructor(private readonly util: UtilService, private service: TestsService) {
    // this.testForm$.subscribe(
    //   response => {
    //     this.testForm = response; 
    //   }
    // );
  }
  ngOnInit(): void {
    this.util.getTestForm().subscribe(
      testForm => this.testForm = testForm 
    );
  }
  get questions(){
    return this.testForm.get('questions') as FormArray; 
  }
  
  getAnswers(qIdx: number){
    return this.questions.at(qIdx).get('answers') as FormArray; 
  }

  addQuestion(){

  }
  removeQuestion(qIdx: number){

  }

  addAnswer(qIdx: number){

  }
  removeAnswer(qIdx: number, ansIdx:number){

  }

  save(){
    if (this.testForm.invalid) {
      // stop here if it's invalid
      alert('Invalid input');
      return;
    }
    console.log(this.testForm.getRawValue()); 
    //this.service.addTest(this.testForm.getRawValue()); 
    this.service.updateTest(this.testForm.getRawValue()); 
      // .subscribe(():void =>{
      //   alert("Saved!"); 
      // })
    // this.service.submitUpdate(this.testForm.getRawValue())
    //     .subscribe((): void => {
    //         alert('Saved!');
    //     });

  }

}
  // get questions(){
  //   this.testForm$.subscribe(
  //     response => {
  //       this.
  //     }
  //   )
  //   return this.testForm.get('questions') as FormArray; 
  // }

  // ngOnInit(): void {
  //   //this.tests =this.getTests();
  //   this.service.getTests().subscribe(response =>{
  //       this.rawTests = response; 
  //       this.rawTestsToDashboardTests(); 
  //     }
  //     );
  // }


