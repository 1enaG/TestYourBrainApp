export interface  Test{
    id: number; 
    caption: string;  //name 
    subject: string;  
    open: boolean; //status (public = true, private = false)
    icon: string;
    externalID: string;
    userExternalID: string;

    questions: Question[]; 
  }
  
export interface Question{
    id: number; 
    caption: string; 
    required: boolean; 
    answers: Answer[]; 
}

export interface Answer{
    id: number;
    text: string; 
    right: boolean; 
    isChecked: boolean;  // added this 
}

export interface User{
    id: number;  
    externalid: string
    login: string; 
    password: string; 
    firstName: string; 
    lastName: string;
    country: string; 
    avatar: string; 
    email: string;
}

export interface Token{
    login: string;
    externalId: string;
    accessToken: string;
}

export interface ResultTest {
    id: number;
    externalId: string;
    userExternalID: string;
    testExternalID: string;
    passDate: string;
    attemptCount: number;
    percentSuccess: number;
}