import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {  faTrash, faCopy, faImage, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms'; 
import { TestsService } from '../services/tests.service';
import { UtilService } from '../services/util.service';
import { ImageService } from '../services/image.service';

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
//testForm$: Observable<FormGroup> = this.util.getTestForm();  
testForm!: FormGroup; 
faDelete = faTrash;
faCopy = faCopy; 
faUploadImage = faImage; 
faXmark = faXmark; 

defaultIcon : string =  'https://img.freepik.com/free-vector/job-exam-test-vector-illustration_138676-243.jpg?w=2000'; 
testIcon : string = ''; 

eQuestionType = QuestionType; // enum 

constructor(private readonly util: UtilService, 
  private service: TestsService, 
  private imgService: ImageService,
  private router: Router) {
  // this.testForm$.subscribe(
  //   response => {
  //     this.testForm = response; 
  //   }
  // );
}
ngOnInit(): void {
  // get EMPTY TEST FORM: 
  this.testForm = this.util.getEmptyTestForm(); // no need to subscribe bc we are not calling the server
  this.testForm.patchValue({ 
    icon: this.defaultIcon // set default icon on init
  });
  this.service.createTest();
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
  this.service.updateTest(this.testForm.getRawValue());
  this.router.navigate(['/dashboard-component']); 
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

    // get questionName(){
    
  //   return this.testForm.get("questionName"); 
  //   //return this.questionForm.get("questionName"); 
  // }
  // get options(){
  //   return this.questionForm.get("options") as FormArray; 
  // }