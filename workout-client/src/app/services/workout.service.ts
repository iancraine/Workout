import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workout } from '../models/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http:HttpClient) { }

  getAllWorkouts() : Observable<Array<Array<Workout>>>{
    return this.http.get<Array<Array<Workout>>>("http://localhost:3000/workouts");
  }

  getStarredWorkouts() : Observable<Array<Array<Workout>>>{
    return this.http.get<Array<Array<Workout>>>("http://localhost:3000/starred");
  }
}
