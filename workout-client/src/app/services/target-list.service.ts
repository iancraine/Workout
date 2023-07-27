import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Target } from '../models/target';

@Injectable({
  providedIn: 'root'
})
export class TargetListService {

  constructor(private http:HttpClient) { }

  getAllTargets() : Observable<Target[]>{
    return this.http.get<Target[]>("http://localhost:3000/groups");
  }
  getTargetById(targetId: string): Observable<Target>{
    return this.http.get<Target>(`http://localhost:3000/group/${targetId}`);
  }
}
