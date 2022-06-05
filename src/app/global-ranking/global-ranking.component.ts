import { Component, OnInit } from '@angular/core';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-global-ranking',
  templateUrl: './global-ranking.component.html',
  styleUrls: ['./global-ranking.component.css']
})
export class GlobalRankingComponent implements OnInit {

  faSort = faSortDown; 

  testRank = 1; 
  tabId = "topTests"; // keeps track of current tab
  
  testSearchText = ""; 
  userSearchText = ""; 

  tests: DashboardTest[] = [];
  users: DashboardUser[] = []; 
  constructor() { }

  ngOnInit(): void {
    this.tests = this.getTests(); 
    this.users = this.getUsers(); 
  }
  

  onTabChange(tabId :string){
    if(tabId=="topTests"){
      this.tabId = "topTests"; 
    }else if(tabId == "topUsers"){
      this.tabId = "topUsers"; 
    }
  }
  sortUsersByCount(){
      this.users.sort((obj1, obj2) => {
        if (obj1.count > obj2.count) {
            return -1; // in reverse order: highest to lowest 
        }
    
        if (obj1.count < obj2.count) {
            return 1;
        }
        return 0;
    });
  }
  sortUsersByScore(){
      this.users.sort((obj1, obj2) => {
        if (obj1.avgScore > obj2.avgScore) {
            return -1; // in reverse order: highest to lowest 
        }
    
        if (obj1.avgScore < obj2.avgScore) {
            return 1;
        }
        return 0;
    });
  }
  sortTestsByCount(){
    this.tests.sort((obj1, obj2) => {
      if (obj1.count > obj2.count) {
          return -1; // in reverse order: highest to lowest 
      }
  
      if (obj1.count < obj2.count) {
          return 1;
      }
      return 0;
  });
  }
  sortTestsByScore(){
    this.tests.sort((obj1, obj2) => {
      if (obj1.avgScore > obj2.avgScore) {
          return -1; // in reverse order: highest to lowest 
      }
  
      if (obj1.avgScore < obj2.avgScore) {
          return 1;
      }
      return 0;
  });
  }

  getTests(): DashboardTest[]{
    return  [
      {
        id: 1, 
        name: "Test 1", 
        subject: "Subject 2", 
        imgURL: "https://www.verywellhealth.com/thmb/AN4Z27FMJn5lcC421bogmAPOi0c=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/fresh-grapefruit-on-chopping-board-1266067263-73c505565bed40ef8524f463e4fbea5f.jpg",
        avgScore: 87, 
        count: 35, 
      }, 
      {
        id: 2, 
        name: "Test 2", 
        subject: "Subject 2", 
        imgURL: "https://www.bezzia.com/wp-content/uploads/2021/07/vintage-vs-retro.jpg",
        avgScore: 53, 
        count: 12, 
      }, 
      {
        id: 3, 
        name: "Test 3", 
        subject: "Subject 3", 
        imgURL: "https://img.freepik.com/foto-gratis/vintage-color-paredes-madera-suelo-fondo_1249-936.jpg",
        avgScore: 68, 
        count: 102, 
      },
      {
        id: 3, 
        name: "Test 4", 
        subject: "Subject 4", 
        imgURL: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1573578005i/28440999._SY540_.jpg",
        avgScore: 76, 
        count: 13, 
      },
      
    ]; 
  }// end of getTests()

  getUsers(): DashboardUser[]{
    return  [
      {
        id: 1, 
        username: "User 1", 
        firstName: "Andrew", 
        lastName: "", 
        imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aDHlzgAfDG4_gGi4P2MKfwY-dqaqLwH-kPuyfU240-BZd32D5NsX_NSbdj6l1gg0OQU&usqp=CAU",
        avgScore: 87, 
        count: 35, 
      }, 
      {
        id: 2, 
        username: "User 2", 
        firstName: "Clare", 
        lastName: "", 
        imgURL: "https://cdn-icons-png.flaticon.com/512/168/168734.png",
        avgScore: 53, 
        count: 12, 
      }, 
      {
        id: 3, 
        username: "User 3", 
        firstName: "Anna", 
        lastName: "", 
        imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7NIFM8QiRrDJqNRJ9xj-_b09MQwQK0Io5xg3Ge9z2wnmdglim2PCOzHdWsjq0qT_Y8v4&usqp=CAU",
        avgScore: 68, 
        count: 102, 
      },
      {
        id: 4, 
        username: "User 4", 
        firstName: "Sasha", 
        lastName: "Hroza", 
        imgURL: "https://thumbs.dreamstime.com/b/man-default-faceless-avatar-icon-male-student-user-silhouette-vector-teenager-curly-hair-isolated-photo-placeholder-people-223352844.jpg",
        avgScore: 76, 
        count: 13, 
      },
      
    ]; 
  }// end of getTests()

}


interface DashboardTest{ //TODO: rename to DecoratedTest
  id: number; 
  name: string; 
  subject: string; 
  imgURL: string; // for now 
  count: number; 
  avgScore: number;
}

interface DashboardUser{ //TODO: rename to DecoratedTest
  id: number; 
  username: string; 
  firstName: string; 
  lastName: string;  
  imgURL: string; // avatar
  count: number; 
  avgScore: number;
}
