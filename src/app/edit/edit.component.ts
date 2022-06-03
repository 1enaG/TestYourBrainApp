import { Component, OnInit } from '@angular/core';
import { UtilService } from '../services/util.service';
import { FormArray, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  //testForm$: Observable<FormGroup> = this.util.getTestForm(); 
  
  testForm!: FormGroup; 
  
  constructor(private readonly util: UtilService) {
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


}
