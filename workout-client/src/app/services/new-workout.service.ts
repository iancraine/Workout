import { Injectable } from '@angular/core';
import { Workout } from '../models/workout';
import { BehaviorSubject, Observable, toArray } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewWorkoutService {
  private workout$ = new BehaviorSubject<Workout[]>([]);
  private workoutStart$ = new BehaviorSubject<boolean>(false);
  private baseUrl!: string



  constructor(private http:HttpClient) {
    this.baseUrl = 'http://localhost:3000';
   }

  public addWorkout(newWorkout: Workout){
    this.workout$.next(this.workout$.value.concat(newWorkout)); 
  }

  public getWorkout(): Observable<Workout[]>{
    return this.workout$
  }

  public getForm(): Observable<boolean>{
    return this.workoutStart$;
  }
  public startWorkout():void{
    this.workoutStart$.next(true);
  }


  //Not posting*********************************
  public finishWorkout(){
    let newWorkout = this.workout$.value;
    return this.http.post<Array<Workout>>(this.baseUrl+"/addworkout", newWorkout).subscribe(
      () => {
        this.workoutStart$.next(false);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }
}
