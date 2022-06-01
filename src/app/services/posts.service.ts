import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsUrl = "https://jsonplaceholder.typicode.com/posts"; //base URL 
  //http: HttpClient; 
  constructor(private http: HttpClient) { }

  getPosts(){
    //return this.http.get<Post>(this.postsUrl);
    return this.http.get<Post[]>(this.postsUrl); 
  }
  addPost(newPost: Post){ 
    return this.http.post(this.postsUrl, JSON.stringify(newPost)); 
  }
  
}

export interface Post{
  userId: number;
  id: number; 
  title: string; 
  body: string; 
}
