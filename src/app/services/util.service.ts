import { FormBuilder } from '@angular/forms';
import { TestsService } from './tests.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Answer, Question, Test } from '../entities/test.model';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  
  constructor(private service: TestsService, private fb: FormBuilder) {  
  }

  // this service builds, fills with data (from test service) and returns a form for editing a test

  defaultIcon : string =  'https://img.freepik.com/free-vector/job-exam-test-vector-illustration_138676-243.jpg?w=2000'; 

  // for CREATE test: 
  getEmptyTestForm(){
    return this.fb.group({
      id: 0, //or smth else? EMPTY and then we get an ID in return? 
      caption: "",
      subject: "",
      icon: "", //"https://img.freepik.com/free-vector/job-exam-test-vector-illustration_138676-243.jpg?w=2000",
      open: false,  
      questions: this.fb.array([
         //generate a form for each question and add here
        this.generateEmptyQuestionForm(0) // brand new question -> id = 0 
      ])// end of questions array
    }
    ); 
  }

 
  // for EDIT test: 
  getTestForm(testId: number){
    this.service.getTest(testId).subscribe(response =>console.log(response)); 
    return this.service.getTest(testId).pipe(
      map((response: any)=>this.fb.group({
        id: response.id,
        caption: response.caption,
        subject: response.subject,
        icon: response.icon,
        open: response.open,  
        questions: this.fb.array(
           //generate a form for each question and add here
          response.questions.map((question: any) => this.generateQuestionForm(question))
        )// end of questions array
      })
      )//end of map 
    );//end of pipe
  }
 // roomTypes: this.fb.array(apiResponse.roomTypes.map(roomType => this.generateRoomTypeForm(roomType)))


  generateQuestionForm(question :Question){
    const questionForm = this.fb.group({
      id: question.id, 
      caption: question.caption, 
      required: question.required,
      answers: this.fb.array(
        question.answers.map((answer : Answer) =>
          this.generateAnswerForm(answer)
        )
      ) //end of answers array
    }); 
    return questionForm; 
  }

  //We need to assign question ids somehow at once. 
  //Because we need to know WHICH question to add options to!
  generateEmptyQuestionForm(newId: number){
    const questionForm = this.fb.group({
      id: newId,  //what do i do with the id?.. We have to assign it an id somehow...
      caption: "", 
      required: true,
      answers: this.fb.array([
        this.generateEmptyAnswerForm(1) // brand new question -> id of first answer = 1 
      ] 
      ) //end of answers array
    }); 
    return questionForm; 
  }


  generateAnswerForm(answer: Answer){
    const answerForm = this.fb.group({
      id: answer.id,
      text: answer.text, 
      right: answer.right, 
    })
    return answerForm; 
  }

  generateEmptyAnswerForm(newId: number){
    const answerForm = this.fb.group({
      id: newId,
      text: "", 
      right: false, 
    })
    return answerForm; 
  }


}
