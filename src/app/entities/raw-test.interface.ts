// represents a test json that we get from the backend
export interface RawTest{
    id: number; 
    caption: string;  //name 
    subject: string;  
    open: boolean; //status (public = true, private = false)
    icon: string; 
    //additionally:
    //questions: Question[]; 
  }