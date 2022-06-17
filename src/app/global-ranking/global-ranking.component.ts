import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { Test, User } from '../entities/test.model';
import { TestsService } from '../services/tests.service';

@Component({
  selector: 'app-global-ranking',
  templateUrl: './global-ranking.component.html',
  styleUrls: ['./global-ranking.component.css']
})
export class GlobalRankingComponent implements OnInit {

  faSort = faSortDown; 

  tabId = "topTests"; // keeps track of current tab

  rawTests : Test[] = []; 
  rawUsers : User[] = []; 

  testSearchText = ""; 
  userSearchText = ""; 

  dashboardTests: DashboardTest[] = [];
  dashboardUsers: DashboardUser[] = []; 

  constructor(private testsService: TestsService, private usersService :UsersService) { }

  ngOnInit(): void {
    this.testsService.getTests().subscribe(response =>{
      this.rawTests = response; 
      this.testsToDashboardTests(this.rawTests);
    });
     

    this.usersService.getUsers().subscribe(response =>{
      this.rawUsers = response; 
      this.usersToDashboardUsers(this.rawUsers); 
    }); 
    
    //this.dashboardTests = this.getTests(); 
    //this.users = this.getUsers(); 
  }
  

  onTabChange(tabId :string){
    if(tabId=="topTests"){
      this.tabId = "topTests"; 
    }else if(tabId == "topUsers"){
      this.tabId = "topUsers"; 
    }
  }
  sortUsersByCount(){
      this.dashboardUsers.sort((obj1, obj2) => {
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
      this.dashboardUsers.sort((obj1, obj2) => {
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
    this.dashboardTests.sort((obj1, obj2) => {
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
    this.dashboardTests.sort((obj1, obj2) => {
      if (obj1.avgScore > obj2.avgScore) {
          return -1; // in reverse order: highest to lowest 
      }
  
      if (obj1.avgScore < obj2.avgScore) {
          return 1;
      }
      return 0;
  });
  }

  usersToDashboardUsers(rawUsers : User[]){
    rawUsers.forEach(u => {
      let dUser = {
        id: u.id,
        login: u.login, 
        firstName: u.firstName, 
        lastName: u.lastName, 
        avatar: u.avatar, 
        avgScore: this.randomIntFromInterval(75, 100), 
        count: this.randomIntFromInterval(5, 15)
      }; 
      this.dashboardUsers.push(dUser); 
    });
  }
  testsToDashboardTests(rawTests: Test[]){
    rawTests.forEach(t => {
      let dTest = {
        id: t.id,
        caption: t.caption, 
        subject: t.subject, 
        icon: t.icon,  
        avgScore: this.randomIntFromInterval(65, 100), 
        count: this.randomIntFromInterval(1, 35)
      }; 
      this.dashboardTests.push(dTest); 
    });
  }
  // helper: 
  randomIntFromInterval(min :number, max:number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  // getTests(): DashboardTest[]{
  //   return  [
  //     {
  //       id: 1, 
  //       name: "Test 1", 
  //       subject: "Subject 2", 
  //       imgURL: "https://www.verywellhealth.com/thmb/AN4Z27FMJn5lcC421bogmAPOi0c=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/fresh-grapefruit-on-chopping-board-1266067263-73c505565bed40ef8524f463e4fbea5f.jpg",
  //       avgScore: 87, 
  //       count: 35, 
  //     }, 
  //     {
  //       id: 2, 
  //       name: "Test 2", 
  //       subject: "Subject 2", 
  //       imgURL: "https://www.bezzia.com/wp-content/uploads/2021/07/vintage-vs-retro.jpg",
  //       avgScore: 53, 
  //       count: 12, 
  //     }, 
  //     {
  //       id: 3, 
  //       name: "Test 3", 
  //       subject: "Subject 3", 
  //       imgURL: "https://img.freepik.com/foto-gratis/vintage-color-paredes-madera-suelo-fondo_1249-936.jpg",
  //       avgScore: 68, 
  //       count: 102, 
  //     },
  //     {
  //       id: 3, 
  //       name: "Test 4", 
  //       subject: "Subject 4", 
  //       imgURL: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1573578005i/28440999._SY540_.jpg",
  //       avgScore: 76, 
  //       count: 13, 
  //     },
      
  //   ]; 
  // }// end of getTests()

  // getUsers(): DashboardUser[]{
  //   return  [
  //     {
  //       id: 1, 
  //       username: "User 1", 
  //       firstName: "Andrew", 
  //       lastName: "", 
  //       imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aDHlzgAfDG4_gGi4P2MKfwY-dqaqLwH-kPuyfU240-BZd32D5NsX_NSbdj6l1gg0OQU&usqp=CAU",
  //       avgScore: 87, 
  //       count: 35, 
  //     }, 
  //     {
  //       id: 2, 
  //       username: "User 2", 
  //       firstName: "Clare", 
  //       lastName: "", 
  //       imgURL: "https://cdn-icons-png.flaticon.com/512/168/168734.png",
  //       avgScore: 53, 
  //       count: 12, 
  //     }, 
  //     {
  //       id: 3, 
  //       username: "User 3", 
  //       firstName: "Anna", 
  //       lastName: "", 
  //       imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7NIFM8QiRrDJqNRJ9xj-_b09MQwQK0Io5xg3Ge9z2wnmdglim2PCOzHdWsjq0qT_Y8v4&usqp=CAU",
  //       avgScore: 68, 
  //       count: 102, 
  //     },
  //     {
  //       id: 4, 
  //       username: "User 4", 
  //       firstName: "Sasha", 
  //       lastName: "Hroza", 
  //       imgURL: "https://thumbs.dreamstime.com/b/man-default-faceless-avatar-icon-male-student-user-silhouette-vector-teenager-curly-hair-isolated-photo-placeholder-people-223352844.jpg",
  //       avgScore: 76, 
  //       count: 13, 
  //     },
      
  //   ]; 
  // }// end of getTests()

}


interface DashboardTest{ //TODO: rename to DecoratedTest
  id: number; 
  caption: string; 
  subject: string; 
  icon: string; // for now 
  count: number; 
  avgScore: number;
}

interface DashboardUser{ //TODO: rename to DecoratedTest
  id: number; 
  login: string; 
  firstName: string; 
  lastName: string;  
  avatar: string; // avatar
  count: number; 
  avgScore: number;
}
