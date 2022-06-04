import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  @Input() scoreValue: number = 0; 
  constructor() { }

  ngOnInit(): void {
  }

  getColorClass(score: number): string{
    if(score > 90){
      return "bg-emerald-600";
    }
    if(score > 80){
      return  "bg-green-600"; 
    }
    if(score > 70){
      return  "bg-lime-600"; 
    }
    if(score > 60){ //lime-500 (custom value instead!)
      return  "bg-[#D1F100]"; 
    }
    if(score > 50){
      return  "bg-yellow-400"; 
    }
    if(score > 40){
      return  "bg-amber-500"; 
    }
    if(score > 30){
      return  "bg-orange-500"; 
    }
    if(score > 20){
      return  "bg-orange-600"; 
    }
    if(score > 10){
      return  "bg-red-600"; 
    }
    else return "bg-red-700"; 
  }

}
