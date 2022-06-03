import { FormBuilder } from '@angular/forms';
import { TestsService } from './tests.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Answer, Question, Test } from '../entities/test.model';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  // this service builds, fills with data (from test service) and returns a form for editing a test

  constructor(private service: TestsService, private fb: FormBuilder) { 
  }

  // (test edit form)
  getTestForm(){
    this.service.getTest(1).subscribe(response =>console.log(response)); 
    return this.service.getTest(1).pipe(
      map((response: any)=>this.fb.group({
        id: response.id,
        testName: response.caption,
        testSubject: response.subject,
        testImage: response.icon, 
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
      questionName: question.caption, 
      required: question.required,
      answers: this.fb.array(
        question.answers.map((answer : Answer) =>
          this.generateAnswerForm(answer)
        )
      ) //end of answers array
    }); 
    return questionForm; 
  }

  generateAnswerForm(answer: Answer){
    const answerForm = this.fb.group({
      id: answer.id,
      answerText: answer.text, 
      right: answer.right, 
    })
    return answerForm; 
  }


}
