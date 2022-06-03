export interface Test{
    id: number; 
    caption: string;  //name 
    subject: string;  
    open: boolean; //status (public = true, private = false)
    icon: string; 

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

}