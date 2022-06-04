import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

// Service for working with images, e.g. base-64 encoding
@Injectable({
  providedIn: 'root'
})

export class ImageService {

  constructor() { }

  toBase64(file :File){ //img -> base64 encoding 
    const observable = new Observable((subscriber: Subscriber<any>)=>{
        //read the file here
        this.readFile(file, subscriber); 
    }
    );
    return observable; //the user class has to subscribe! 
  }

  readFile(file:File, subscriber:Subscriber<any>){
    const fileReader = new FileReader(); 
    fileReader.readAsDataURL(file); 
    fileReader.onload=()=>{
      subscriber.next(fileReader.result); 
      subscriber.complete(); 
    }
    fileReader.onerror=(error)=>{
      subscriber.error(error); 
      subscriber.complete(); 
    }
  }
}
