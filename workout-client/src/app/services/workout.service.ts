import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workout } from '../models/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private baseUrl!: string


  constructor(private http:HttpClient) { 
    this.baseUrl = 'http://localhost:3000';
  }

  getAllWorkouts() : Observable<Array<Array<Workout>>>{
    return this.http.get<Array<Array<Workout>>>(this.baseUrl + "/workouts");
  }

  getStarredWorkouts() : Observable<Array<Array<Workout>>>{
    return this.http.get<Array<Array<Workout>>>(this.baseUrl + "/starred");
  }

  getWorkoutById(workoutId: string) : Observable<Array<Workout>>{
    return this.http.get<Array<Workout>>(`${this.baseUrl}/workout/${workoutId}`)
  }

  deleteWorkout(workoutId: string){
    return this.http.delete(`${this.baseUrl}/delete/${workoutId}`);
  }

  modifyWorkout(workoutId: string, newWorkout: Array<Workout>){
    return this.http.put(`${this.baseUrl}/edit/${workoutId}`, newWorkout);
  }
}
