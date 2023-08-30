import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Target } from '../models/target';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root'
})
export class TargetListService {
  

  private baseUrl!: string


  constructor(private http:HttpClient) {
    this.baseUrl = 'http://localhost:3000';
    
   }

  getAllTargets() : Observable<Target[]>{
    return this.http.get<Target[]>("http://localhost:3000/groups");
  }
  getTargetById(targetId: string): Observable<Target>{
    return this.http.get<Target>(`http://localhost:3000/group/${targetId}`);
  }
  addTarget(newTarget: Target){
    return this.http.post<Target>(this.baseUrl+"/addgroup", newTarget);
  }
  modifyTarget(newTarget: Target, targetId: string){
    return this.http.put<Target>(`${this.baseUrl}/modify/${targetId}`, newTarget);
  }
  deleteTarget(targetId: string){
    return this.http.delete(`${this.baseUrl}/remove/${targetId}`);
  }
  addExerciseToTarget(targetId: string, exercise:Exercise){
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
  // };
    return this.http.post<Exercise>(`${this.baseUrl}/${targetId}/addexercise`, exercise)
  }
}
