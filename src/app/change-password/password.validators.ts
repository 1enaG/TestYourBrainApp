import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators{

    static passwordShouldBeCorrect(control: AbstractControl): Promise<ValidationErrors|null> {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                console.log("pretending to make a request to the server"); 
                if(control.value !== "123456"){ // TODO: call to server here!! 
                    resolve({ passwordShouldBeCorrect: true }); //return 
                }
                else{
                    resolve(null); // return 
                }
            }, 2000);

        }); 
        
    } // end of passwordShouldBeCorrect
    static passwordsShouldMatch(control: AbstractControl):ValidationErrors | null { // we pass in the FormGroup with the two passwords
        let newPassword = control.get("newPassword"); 
        let confirmPassword = control.get("confirmPassword"); 

        if(newPassword?.value !== confirmPassword?.value){
            return { passwordsShouldMatch: true }; 
        }
        else 
            return null; 
    }

}