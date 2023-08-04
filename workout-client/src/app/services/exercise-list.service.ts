import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseListService {

  private baseUrl!: string

  constructor(private http:HttpClient) {
    this.baseUrl = 'http://localhost:3000'
   }

  getAllExercises() : Observable<Exercise[]>{
    return this.http.get<Exercise[]>(this.baseUrl+"/exercises");
  }
  getExerciseById(exerciseId: string) : Observable<Exercise>{
    return this.http.get<Exercise>(`${this.baseUrl}/exercise/${exerciseId}`)
  }

  // Pass targetId from click on exercises page
  getExercisesByTarget(targetId: string) : Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${this.baseUrl}/exercises/${targetId}`);
  }

  addExercise(newExercise: Exercise) {
    return this.http.post<Exercise>(this.baseUrl+"/addexercise", newExercise);
  }
  
  modifyExercise(newExercise: Exercise, exerciseId: string){
    return this.http.put<Exercise>(`${this.baseUrl}/${exerciseId}`, newExercise);
  }

  deleteExercise(exerciseId: string){
    return this.http.delete(`${this.baseUrl}/${exerciseId}`);
  }
}
