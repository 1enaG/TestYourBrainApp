import { TestsService } from './../services/tests.service';
import { Component, OnInit } from '@angular/core';
import { Answer, Question, Test } from '../entities/test.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent implements OnInit {

  test!: Test; // or maybe check if it IS there in the template... 
  testId: string = ""; //for now 
  //testAnswers!: TestAnswer[]; 

  constructor(private service: TestsService, private router : Router, private route: ActivatedRoute) { 
      this.route.paramMap
      .subscribe(params=>{
          this.testId = params.get('testId')!;
          console.log(this.testId); 
          
      }); 
      //retrieve test data:      
      this.service.getTest(this.testId).subscribe(response =>{
        this.test = response; 
        //initialize the isChecked fields (with false): 
        this.questions.forEach(q => {
          q.answers.forEach(a =>{
            a.isChecked = false; 
          })
        });
        }); 

        
      //initialize answers array 
    // this.questions.forEach(q => {
    //   q.answers.forEach(ans => {
    //     this.testAnswers.push({
    //       qId: q.id, 
    //       ansId: ans.id,
    //       right: ans.right, 
    //       isChecked: false 
    //     })
    //   });
    // });

  }

  get questions(){
    return this.test.questions; 
  }

  ngOnInit(): void {
  }
  updateAnswer(q: Question, ans: Answer){
    let currentAns = this.questions.find(question => question.id === q.id)
      ?.answers.find(answer => answer.id === ans.id); 
      if(currentAns){
        currentAns.isChecked = !currentAns?.isChecked; 
      }
    console.log("after (hopefully) changing the answer"); 
    console.log(this.test); 
  }

  submitAnswers(): void{
    // count the number of right answers: 
    let totalAnswerCount : number = 0; 
    let correctCount : number = 0; 
    this.questions.forEach( question =>{
      question.answers.forEach( answer =>{
        totalAnswerCount++; 
        if(answer.isChecked == answer.right){
          correctCount++; 
        }
      })
    })
    let score: number = Math.round((correctCount * 100 ) / totalAnswerCount); 
    console.log(score); 
    this.router.navigate(['/testing-result-component', score]); 
    //redirect tot testing-result with this value! 
  }


  // 1. get test from server and fill in the form (without right answers!)
  // 2. on submit (validate, and then) collect all the questions, and user's answers
  // 3. Either send it to server or check yourself
  // 4. Show result: a) score only; b) right answers and score

}
// for each test question, we have to collect the answers. 
// so, for each answer, we have to 

// interface TestAnswer{
//   qId: number; 
//   ansId: number; 
//   right: boolean; 
//   isChecked: boolean; 
// }

// interface PassTest{
//   id: number; 
//   caption: string;  //name 
//   subject: string;  
//   open: boolean; //status (public = true, private = false)
//   icon: string; 

//   questions: PassQuestion[]; 
// }

// interface PassQuestion{
//   id: number; 
//   caption: string; 
//   required: boolean; 
//   answers: PassAnswer[]; 
// }

// interface PassAnswer{
//   id: number;
//   text: string; 
//   right: boolean; 
//   checked: boolean; 
// }
