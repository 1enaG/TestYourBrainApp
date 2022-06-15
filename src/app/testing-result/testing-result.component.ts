import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testing-result',
  templateUrl: './testing-result.component.html',
  styleUrls: ['./testing-result.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({opacity: 0}),
        animate(1500)  //, style({opacity: 1})
      ])
    ])
  ]
})
export class TestingResultComponent implements OnInit {
  
  score!: number; 
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params =>{
        this.score = +params.get('score')!; 
        console.log('score'); 
      })
  }

}
