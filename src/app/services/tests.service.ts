import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Test } from '../entities/test';

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  private postsUrl = "http://localhost:3000/tests"; //base URL 

  constructor(private http: HttpClient) { }

  getTests(){
    //return this.http.get<Post>(this.postsUrl);
    return this.http.get<Test[]>(this.postsUrl); 
  }
  // addPost(newPost: Post){ 
  //   return this.http.post(this.postsUrl, JSON.stringify(newPost)); 
  // }

}
