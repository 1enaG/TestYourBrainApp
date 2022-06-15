import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//import { RawTest } from '../entities/raw-test.interface';
import { Test } from '../entities/test.model';
//import { Test } from '../entities/test.interface';

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  private testsUrl = "http://localhost:3000/tests"; //base URL 

  constructor(private http: HttpClient) { }

  getTests(){
    //return this.http.get<Post>(this.postsUrl);
    return this.http.get<Test[]>(this.testsUrl); 
  }
  getTest(id: number){
    return this.http.get<Test>(this.testsUrl+"/"+id); 
  }
  // addPost(newPost: Post){ 
  //   return this.http.post(this.postsUrl, JSON.stringify(newPost)); 
  // }
  // updateTest(test: Test){
  //   //return 
  //   this.http.put(this.testsUrl+"/"+test.id, JSON.stringify(test)) 
  //     .subscribe(
  //       response =>
  //         console.log(response)
  //     ); 
  // }
  // addTest(test :Test){
  //   console.log(JSON.stringify(test)); 
  //   this.http.post(this.testsUrl, JSON.stringify(test))
  //   .subscribe(response=>
  //     console.log(response)); 
  // }
  addTest(test: Test){
    //test.id = 8; 
    // ! doesn't work without headers
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(test);
    console.log(body); 
    this.http.post(this.testsUrl, body,{'headers':headers}) //TODO: move subscriptiont to create component! Display an alert!
      .subscribe(response=>
        console.log(response)); 
  }
  deleteTest(id: number){
    return this.http.delete(this.testsUrl + '/' + id);
  }

  updateTest(test: Test){
    //test.id = 8; 
    // ! doesn't work without headers
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(test);
    console.log(body); 
    this.http.put(this.testsUrl +"/"+test.id, body,{'headers':headers})
      .subscribe(response=>
        console.log(response)); 
  }


}
