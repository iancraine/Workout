import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseListService {

  constructor(private http:HttpClient) { }

  getAllExercises() : Observable<Exercise[]>{
    return this.http.get<Exercise[]>("http://localhost:3000/exercises");
  }

  // Pass targetId from click on exercises page
  getExercisesByTarget(targetId: string) : Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`http://localhost:3000/exercises/${targetId}`);
  }
}
