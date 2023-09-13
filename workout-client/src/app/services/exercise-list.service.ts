import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseListService {
  private exercises$ = new BehaviorSubject<Exercise[]>([]);
  private filteredExercises$ = new BehaviorSubject<Exercise[]>([]);


  private baseUrl!: string

  constructor(private http:HttpClient) {
    this.baseUrl = 'https://worktout-38c4b55b57ea.herokuapp.com';
   }
  


   //Add error checking****************************
  public init():void{
    this.http.get<Exercise[]>(this.baseUrl+"/exercises")
    .subscribe((exercise) => {
      this.exercises$.next(exercise);      
    },
    (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  public getExercisesStore(): Observable<Exercise[]>{
    return this.exercises$;
  }

  public getFilteredExercises():Observable<Exercise[]>{
    return this.filteredExercises$;
  }

  filterExercise(filter: string){
    this.exercises$.pipe(map(
      exercises => exercises.filter(exercise => exercise.exerciseName.toLowerCase().includes(filter.toLowerCase()))
    )).subscribe(data =>{
      console.log(data);
      
      this.filteredExercises$.next(data);
    });
    }


  getExerciseById(exerciseId: string) : Observable<Exercise>{
    return this.http.get<Exercise>(`${this.baseUrl}/exercise/${exerciseId}`)
  }

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
