import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private statsUrl = "http://localhost:3000/stats";
  constructor(private http: HttpClient) { }
  
  // get avg scores: 
  getStats(id: number){ // test id 
    return this.http.get<Stats>(this.statsUrl+"/"+id); 
  }
}

export interface Stats{
  id: number; 
  avgScores: number[]; 
}
