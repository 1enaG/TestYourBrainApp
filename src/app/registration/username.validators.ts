import { AbstractControl, ValidationErrors } from "@angular/forms";



export class UsernameValidators{
    // takes in a control, returns a validation error (string:boolean) or null 
    static cannotContainSpace(control:AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0){
            return { cannotContainSpace: true }
        }
        else{
            return null; 
        }
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors|null> {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                console.log("pretending to make a request to the server"); 
                if(control.value === "lena"){ // TODO: call to server here!! 
                    resolve({ shouldBeUnique: true }); //return 
                }
                else{
                    resolve(null); // return 
                }
            }, 2000);

        }); 
         
        
    }
}