import { Question } from "./question.interface";

export interface Test{
    id: number; 
    testName: string; 
    testSubject: string; 
    questions: Question[] 

}


// id: number; 
//     caption: string;  //name 
//     subject: string;  
//     open: boolean; //status (public = true, private = false)
//     icon: string; 
//     //additionally:
//     questions: Question[]; 
  // externalID: string; 
// userExternalID: string; 