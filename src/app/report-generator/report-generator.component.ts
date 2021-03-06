import { TestsService } from './../services/tests.service';
import { Component, OnInit } from '@angular/core';
import { Test, User } from '../entities/test.model';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-report-generator',
  templateUrl: './report-generator.component.html',
  styleUrls: ['./report-generator.component.css']
})
export class ReportGeneratorComponent implements OnInit {

  faSort = faSortDown;

  tests : Test[] = []; 
  reportUsers : ReportUser[] =[]; 


  currentTest? : Test; // on test selection, set current test to whatever's chosen 
  constructor(private service: TestsService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.service.getTests().subscribe(response =>{
      this.tests = response; 
    }
    );
    this.usersService.getUsers().subscribe(response =>{
      let rawUsers: User[] = response; 
      this.usersToReportUsers(rawUsers); 

    });
    //this.users = this.getUsers(); 
  }
  onTestChange(){
    //this.users = this.getUsers(this.currentTest?.id);
    // faking it: 
    this.reportUsers = [];  
    this.usersService.getUsers().subscribe(response =>{
      let rawUsers: User[] = response; 
      this.usersToReportUsers(rawUsers); 

    });
  }
  usersToReportUsers(rawUsers : User[]){
    rawUsers.forEach(u => {
      let rUser = {
        id: u.id, 
        login: u.login, 
        firstName: u.firstName, 
        lastName: u.lastName, 
        avatar: u.avatar, 
        date: "14 june, 2022",
        score: this.randomIntFromInterval(50, 100)
      }; 
      this.reportUsers.push(rUser); 
    });
  }
   // helper: 
   randomIntFromInterval(min :number, max:number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  // getUsers(testId? : number): ReportUser[]{
  //   if(testId == 1)
  //     return  [
  //       {
  //         id: 1, 
  //         username: "User 1", 
  //         firstName: "Andrew", 
  //         lastName: "", 
  //         imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aDHlzgAfDG4_gGi4P2MKfwY-dqaqLwH-kPuyfU240-BZd32D5NsX_NSbdj6l1gg0OQU&usqp=CAU",
  //         score: 80, 
  //         date: 'may 29, 2022', 
  //       }, 
  //       {
  //         id: 2, 
  //         username: "User 2", 
  //         firstName: "Clare", 
  //         lastName: "", 
  //         imgURL: "https://cdn-icons-png.flaticon.com/512/168/168734.png",
  //         score: 54, 
  //         date: 'june 9, 2022', 
  //       }, 
  //       {
  //         id: 3, 
  //         username: "User 3", 
  //         firstName: "Anna", 
  //         lastName: "", 
  //         imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7NIFM8QiRrDJqNRJ9xj-_b09MQwQK0Io5xg3Ge9z2wnmdglim2PCOzHdWsjq0qT_Y8v4&usqp=CAU",
  //         score: 70, 
  //         date: 'june 2, 2022', 
  //       },
  //       {
  //         id: 4, 
  //         username: "User 4", 
  //         firstName: "Sasha", 
  //         lastName: "Hroza", 
  //         imgURL: "https://thumbs.dreamstime.com/b/man-default-faceless-avatar-icon-male-student-user-silhouette-vector-teenager-curly-hair-isolated-photo-placeholder-people-223352844.jpg",
  //         score: 95, 
  //         date: 'june 15, 2022', 
  //       },
        
  //     ]; 
  //   else if(testId == 2)
  //     return [
  //       {
  //         id: 3, 
  //         username: "User 3", 
  //         firstName: "Anna", 
  //         lastName: "", 
  //         imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7NIFM8QiRrDJqNRJ9xj-_b09MQwQK0Io5xg3Ge9z2wnmdglim2PCOzHdWsjq0qT_Y8v4&usqp=CAU",
  //         score: 67, 
  //         date: 'june 13, 2022', 
  //       },
  //       {
  //         id: 2, 
  //         username: "User 2", 
  //         firstName: "Clare", 
  //         lastName: "", 
  //         imgURL: "https://cdn-icons-png.flaticon.com/512/168/168734.png",
  //         score: 92, 
  //         date: 'june 10, 2022', 
  //       }

  //     ]; 
  //   else 
  //     return [
  //       {
  //         id: 1, 
  //         username: "User 1", 
  //         firstName: "Andrew", 
  //         lastName: "", 
  //         imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aDHlzgAfDG4_gGi4P2MKfwY-dqaqLwH-kPuyfU240-BZd32D5NsX_NSbdj6l1gg0OQU&usqp=CAU",
  //         score: 61, 
  //         date: 'may 17, 2022', 
  //       }, 
  //       {
  //         id: 2, 
  //         username: "User 2", 
  //         firstName: "Clare", 
  //         lastName: "", 
  //         imgURL: "https://cdn-icons-png.flaticon.com/512/168/168734.png",
  //         score: 64, 
  //         date: 'june 10, 2022', 
  //       }, 
  //       {
  //         id: 4, 
  //         username: "User 4", 
  //         firstName: "Sasha", 
  //         lastName: "Hroza", 
  //         imgURL: "https://thumbs.dreamstime.com/b/man-default-faceless-avatar-icon-male-student-user-silhouette-vector-teenager-curly-hair-isolated-photo-placeholder-people-223352844.jpg",
  //         score: 77, 
  //         date: 'june 3, 2022', 
  //       },
  //     ]; 
  // }// end of getUsers()

}


interface ReportUser{
  id: number; 
  login: string; 
  firstName: string; 
  lastName: string; 
  avatar: string; 
  date: string; 
  score: number; 
}
