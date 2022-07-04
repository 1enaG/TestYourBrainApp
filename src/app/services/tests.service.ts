import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//import { RawTest } from '../entities/raw-test.interface';
import { Test, Token } from '../entities/test.model';

//import { Test } from '../entities/test.interface';

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  private testsUrl = "https://localhost:7199/tests-management/"; //base URL 
  protected headers;
  private token: Token; 
  private testExternalID: string;

  constructor(private http: HttpClient) {
    this.testExternalID = "";
    this.token = JSON.parse(localStorage.getItem("token") || '{}');
    this.headers = { 'content-type': 'application/json', 'Authorization': 'Bearer ' + this.token.accessToken };
  }

  getTests(){
    return this.http.get<Test[]>(this.testsUrl + "tests/" + this.token.externalId, { headers: this.headers });
  }
  getTest(id: string){
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

  createTest() {
    this.headers = { 'content-type': 'application/json', 'Authorization': 'Bearer ' + this.token.accessToken };
    this.http.post<Test>(this.testsUrl + "users/" + this.token.externalId + "/tests/", null, { headers: this.headers }) //TODO: move subscriptiont to create component! Display an alert!
      .subscribe(
        response => this.testExternalID = response.externalID);    
  }

  deleteTest(id: string) {
    return this.http.delete(this.testsUrl + "users/" + this.token.externalId + "/tests/" + id, { headers: this.headers });
  }

  updateTest(test: Test) {
    this.headers = { 'content-type': 'application/json', 'Authorization': 'Bearer ' + this.token.accessToken };
    test.externalID = this.testExternalID;
    test.userExternalID = this.token.externalId;
    const body=JSON.stringify(test);
    console.log(body);
    this.http.put(this.testsUrl + "users/" + this.token.externalId + "/tests/", body, { headers: this.headers })
      .subscribe(response=>
        console.log(response)); 
  }


}
