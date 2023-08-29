import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Target } from '../models/target';

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
  addExerciseToTarget(targetId: string, exerciseId:string){
    return this.http.post(`${this.baseUrl}/${targetId}/addexercise`, exerciseId)
  }
}
