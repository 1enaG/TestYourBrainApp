import { Component, OnInit } from '@angular/core';

import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'node_modules/chart.js';  // to use the CHART 
import {registerables} from 'chart.js'; // VERY important two lines! 
//import { timeStamp } from 'console';
Chart.register(...registerables); 

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  faCircle = faCircle; 
  tests :Test[] = []; //tests that i get from the Backend *decorated* with necessary fields 
  dates: Date[] = []; // the dates that the user has chosen to get a chart for
  colors: string[] = []; 
  constructor() { }
  chartCanvas!: Chart; // ! = definite assignement attribute 

  ngOnInit(): void {
    // dummy data
    this.dates = this.getDates();  

    // this has to be provided by a method of a service class: 
    this.tests = this.getTests(); 
    this.colors = this.getColors(); 

    this.assignColors(); 

    this.drawChart(); //takes the dates and tests in current component and draws a chart 
  } // end of OnInit()

  drawChart(){
     // generate the datasets Array: 
    let testsDataSet :DataItem[] = [];  //TODO: rename Dataset to something more legible!
    

    // create and configure a chart object 
    // render it on the canvas
    const labels = this.getDateStrings();  

    this.tests.forEach( (t) =>{
        let dataItem :DataItem = this.testToDataItem(t); 
        testsDataSet.push(dataItem); 
    }); 

    const performanceData = {
      labels: labels,
      datasets: testsDataSet, 
    };

    const chartOptions = {
      elements: {
        point: {
          radius: 4, 
          borderWidth: 3, 
          hoverRadius: 5, 
          hoverBorderWidth: 4
        }
      }, 
      // legend 
      plugins: {  // 'legend' now within object 'plugins {}'
        legend: {
          labels: {
            color: 'rgb(214, 219, 223)',  // not 'fontColor:' anymore
            // fontSize: 18  // not 'fontSize:' anymore
            // font: {
            //   size: 18 // 'size' now within object 'font {}'
            // }
          }
        }
      }, 
      // axes 
      scales: {
        x: {
          ticks: {
            color: 'rgb(214, 219, 223)'
          }
        }, 
        y: {
          ticks: {
            color: 'rgb(235, 237, 239)' 
          }
        }
      },
      
    }; 

    this.chartCanvas = new Chart("chartCanvas", {
      type: 'line',
      data: performanceData,
      options: chartOptions, 
    });
    
  }





  // Dummy data suppliers (temporary!)
  getDates(): Date[]{
    return [
      new Date(2022, 5, 10), 
      new Date(2022, 5, 11), 
      new Date(2022, 5, 12), 
      new Date(2022, 5, 13),
      new Date(2022, 5, 14),
    ];
  }
  getColors(): string[]{
    return [
      'rgb(75, 192, 192)',
      'rgb(255, 193, 7)',
      'rgb(230, 126, 34)',
    ]; 
  }

  getTests(): Test[]{
    return  [
      {
        id: 1, 
        name: "Test 1", 
        subject: "Subject 2", 
        imgURL: "https://www.verywellhealth.com/thmb/AN4Z27FMJn5lcC421bogmAPOi0c=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/fresh-grapefruit-on-chopping-board-1266067263-73c505565bed40ef8524f463e4fbea5f.jpg",
        avgScores: [65, 80, 48, 100, 70],
        color: "",
        isSelected: true, 
      }, 
      {
        id: 2, 
        name: "Test 2", 
        subject: "Subject 2", 
        imgURL: "https://www.bezzia.com/wp-content/uploads/2021/07/vintage-vs-retro.jpg",
        avgScores: [89, 72, 58, 60, 84],
        color: "",
        isSelected: true, 
      }, 
      {
        id: 3, 
        name: "Test 3", 
        subject: "Subject 3", 
        imgURL: "https://img.freepik.com/foto-gratis/vintage-color-paredes-madera-suelo-fondo_1249-936.jpg",
        avgScores: [59, 80, 81, 56, 55],
        color: "",
        isSelected: true, 
      },
      {
        id: 4, 
        name: "Test 4", 
        subject: "Subject 4", 
        imgURL: "https://www.bezzia.com/wp-content/uploads/2021/07/vintage-vs-retro.jpg",
        avgScores: [0, 40, 70, 21, 35],
        color: "",
        isSelected: true, 
      },
      {
        id: 5, 
        name: "Test 5", 
        subject: "Subject 5", 
        imgURL: "https://img.freepik.com/foto-gratis/vintage-color-paredes-madera-suelo-fondo_1249-936.jpg",
        avgScores: [55, 87, 81, 43, 78],
        color: "",
        isSelected: true, 
      },

    ]; 
  }

  //end of dummy data suppliers!



  //helpers: 
  assignColors(){
    let counter = 0; // it's bad that the counter is outside the function 
    this.tests.forEach((t) =>{
      t.color = this.colors[counter++ % this.colors.length];
    }); 
  } //end of assign colors
  
  getDateStrings():string[]{
   let dateStrings: string[] = []; 
   this.dates.forEach(function (d) {
     dateStrings.push(d.toLocaleDateString()); 
   }); 
   return dateStrings; 
  }

  getLabel(test: Test): string{
    return test.name + " Avg Score"; 
  }

  testToDataItem(t: Test): DataItem{
    return {
      label: this.getLabel(t),
      data: t.avgScores, 
      fill: false, 
      borderColor: t.color, //colors[counter++ % colors.length], 
      tension: 0.0, //maybe could be removed altogether? 
    };
  }

  onTestClick(test:Test){
    //test.isSelected = !test.isSelected; 
    this.chartCanvas.data.datasets.forEach((ds) => {
      if(ds.label == this.getLabel(test)){ // label is based ON THE NAME, which is not unique -> may cause problems!! 
        ds.hidden = !ds.hidden;
      }  
    });
    this.chartCanvas.update();
  }

}

interface Test{ //TODO: rename to DecoratedTest
  id: number; 
  name: string; 
  subject: string; 
  imgURL: string; // for now 
  avgScores: number[]; // for now (let's say we get those from backend)
  color: string; //maybe replace with a separate *map* of test to color? 
  isSelected: boolean; // decorator field, default: false 
}

interface DataItem{
  label: string;
  data: number[];
  fill: boolean; 
  borderColor: string;
  tension: number; 
}
