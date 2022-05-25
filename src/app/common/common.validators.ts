import { AbstractControl, ValidationErrors } from "@angular/forms";

// export class CommonValidators{

//     static passwordShouldBeCorrect(control: AbstractControl): Promise<ValidationErrors|null> {
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 console.log("pretending to make a request to the server"); 
//                 if(control.value === "123456"){ // TODO: call to server here!! 
//                     resolve({ passwordShouldBeCorrect: true }); //return 
//                 }
//                 else{
//                     resolve(null); // return 
//                 }
//             }, 2000);

//         }); 
        
//     } // end of passwordShouldBeCorrect

// }