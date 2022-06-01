export interface Test{
    id: number; 
    externalID: string; 
    caption: string;  //name 
    subject: string; 
    userExternalID: string; 
    open: boolean; //status (public = true, private = false)
    icon: string; 
}