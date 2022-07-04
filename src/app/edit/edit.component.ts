import { Component, OnInit } from '@angular/core';
import { UtilService } from '../services/util.service';
import { FormArray, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { TestsService } from '../services/tests.service';
import { SCROLL_THROTTLE_MS } from '@angular/material/tooltip';
import {  faTrash, faCopy, faImage, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';
import { ImageService } from '../services/image.service';


enum QuestionType {
  Radio = "Multiple Choice: Single Answer",
  Checkbox = "Mutliple Choice: Multiple Answers",
  Text = "Short Text",
}
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  //testForm$: Observable<FormGroup> = this.util.getTestForm();  
  testForm!: FormGroup; 
  faDelete = faTrash;
  faCopy = faCopy; 
  faUploadImage = faImage; 
  faXmark = faXmark; 
  
  testIcon : string = ''; 

  eQuestionType = QuestionType; // enum 
  
  constructor(private readonly util: UtilService, 
              private service: TestsService, 
              private route: ActivatedRoute,
              private imgService: ImageService, 
              private router: Router) {
    // this.testForm$.subscribe(
    //   response => {
    //     this.testForm = response; 
    //   }
    // );
  }
  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params=>{
          let testId = params.get('testId')!;
          console.log(testId); 
          //retrieve test data:      
          this.util.getTestForm(testId).subscribe(
            testForm => this.testForm = testForm 
          );
      })
    
  }
  get questions(){
    return this.testForm.get('questions') as FormArray; 
  }
  get icon(){
    return this.testForm.get('icon') as FormControl; 
  }
  
  getAnswers(qIdx: number){
    return this.questions.at(qIdx).get('answers') as FormArray; 
  }

  addQuestion(){
    let newId = this.assignQuestionId(); 
    this.questions.push(this.util.generateEmptyQuestionForm(newId)); 
  }
  OnChange(fileInput: HTMLInputElement){
    if(!fileInput.files) return; 
    let imageFile:File = fileInput.files[0];  
    //console.log(imageFile); 
    this.imgService.toBase64(imageFile)
      .subscribe((data)=>{
        //console.log(data); 
        this.testIcon = data; 
        this.testForm.patchValue({ 
          icon: this.testIcon
        }); 
      }); 

  }

  
  // this finds max question ID for this test and assigns returns id++ 
  //it's a bit of a crotch, but we need immediate id assignment! 
  assignQuestionId(){ //helper function
    let maxId = 0; 
    this.questions.controls.forEach(cg => {
      let id = cg.get("id")?.value; 
      if(id >= maxId){
        maxId = id; 
      }
    });
   return maxId+1; 
  }

  assignAnswerId(qIdx: number){ //helper function
    let maxId = 0; 
    this.getAnswers(qIdx).controls.forEach(cg => {
      let id = cg.get("id")?.value; 
      if(id >= maxId){
        maxId = id; 
      }
    });
   return maxId+1; 
  }
  


  removeQuestion(qIdx: number){
    this.questions.removeAt(qIdx); // we use INDEX in array, not the question's ID!! 
  }

  addAnswer(qIdx: number){
    const newId = this.assignAnswerId(qIdx); 
    this.getAnswers(qIdx).push(this.util.generateEmptyAnswerForm(newId)); 
  }
  removeAnswer(qIdx: number, ansIdx:number){
    this.getAnswers(qIdx).removeAt(ansIdx);
  }
  // addOption(qIdx: number){
  //   this.getOptions(qIdx).push(new FormControl()); // I hope GetOptions return by reference, not a copy 
  // }

  // removeOption(qIdx: number, optIdx:number){ //qidx, optIdx 
  //   this.getOptions(qIdx).removeAt(optIdx); 
  // }

  save(){
    if (this.testForm.invalid) {
      // stop here if it's invalid
      alert('Invalid input');
      return;
    }
    console.log(this.testForm.getRawValue()); 
    //this.service.addTest(this.testForm.getRawValue()); 
    this.service.updateTest(this.testForm.getRawValue()) 
    //this.router.navigate(['/dashboard-component']); 
    this.router.navigate(['/dashboard-component'])
      .then(() => {
        window.location.reload();
      });
    // this.router.navigate(['/'])
    //   .then(() => {
    //     this.router.navigate(['/dashboard-component'])
    //   });
      // .subscribe(():void =>{
      //   alert("Saved!"); 
      // })
    // this.service.submitUpdate(this.testForm.getRawValue())
    //     .subscribe((): void => {
    //         alert('Saved!');
    //     });

  }

  
  onQuestionTypeChange(){

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


