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
  private workoutTitle$ = new BehaviorSubject<string>('');
  private baseUrl!: string



  constructor(private http:HttpClient) {
    this.baseUrl = 'http://workout-app-env.eba-irfcb6jm.us-east-2.elasticbeanstalk.com';
   }

  public addWorkout(newWorkout: Workout){
    this.workout$.next(this.workout$.value.concat(newWorkout)); 
  }

  public getWorkoutName(): Observable<string>{
    return this.workoutTitle$;
  }

  public setName(title: string): void {
    this.workoutTitle$.next(title);
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

  public finishWorkout(){
    let newWorkout = this.workout$.value;
    return this.http.post<Array<Workout>>(this.baseUrl+"/addworkout", newWorkout).subscribe(
      () => {
        this.workoutStart$.next(false);
        this.workoutTitle$.next('');
        this.workout$.next([]);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }
}
