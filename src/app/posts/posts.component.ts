import { Post, PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = []; 

  constructor(private service: PostsService){ }

  ngOnInit(): void {
    this.service.getPosts().subscribe(response =>
      this.posts = response 
    ); 
  }
  createPost(postTitle: HTMLInputElement){
    let newPost : Post= {userId: 0, id: 0, title: postTitle.value, body: "empty body" }; 
    postTitle.value = ""; //clear input field 
    this.service.addPost(newPost).subscribe(response  => {
      newPost.id = (response as Post).id; //maybe
      this.posts.splice(0, 0, newPost); 
      console.log(response)
    }
      ); 
  }



  

}


// constructor(http: HttpClient) { 
//   http.get("https://jsonplaceholder.typicode.com/posts")
//   .subscribe(response =>{
//     this.posts = response.json(); 
//     //console.log(response.json()); // returns an array of posts
//   }
//   ); //notifies us when the result is ready 
//   //getting data from server (returns an observable of the response body as a JSON object)