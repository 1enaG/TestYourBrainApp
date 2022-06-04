import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-ranking',
  templateUrl: './global-ranking.component.html',
  styleUrls: ['./global-ranking.component.css']
})
export class GlobalRankingComponent implements OnInit {

  tabId = "topTests"; // keeps track of current tab
  constructor() { }

  ngOnInit(): void {
  }

  onTabChange(tabId :string){
    if(tabId=="topTests"){
      this.tabId = "topTests"; 
    }else if(tabId == "topUsers"){
      this.tabId = "topUsers"; 
    }
  }

  

}
