import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { RawTest } from '../entities/raw-test.interface';
import { Test } from '../entities/test.model';
//import { Test } from '../entities/test.interface';

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  private postsUrl = "http://localhost:3000/tests"; //base URL 

  constructor(private http: HttpClient) { }

  getTests(){
    //return this.http.get<Post>(this.postsUrl);
    return this.http.get<RawTest[]>(this.postsUrl); 
  }
  getTest(id: number){
    return this.http.get<Test>(this.postsUrl+"/"+id); 
  }
  // addPost(newPost: Post){ 
  //   return this.http.post(this.postsUrl, JSON.stringify(newPost)); 
  // }

}
