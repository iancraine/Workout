import { Injectable } from '@angular/core';
import { Workout } from '../models/workout';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewWorkoutService {
  private workout$ = new BehaviorSubject<Workout>({
    workoutId: 0,
    workoutName: '',
    workoutDate: new Date,
    workoutNote: '',
    exerciseId: 0,
    setsCompleted: 0,
    repsTime: '',
    favorite: false
  });
  private workoutStart$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  addExercise(exercise :Workout){
    this.workout$.next(exercise);
    // HTTP Put into target_exercise
  }
  public getWorkout(): Observable<Workout>{
    return this.workout$
  }

  public getForm(): Observable<boolean>{
    return this.workoutStart$;
  }
  public startWorkout():void{
    this.workoutStart$.next(true);
  }
  public finishWorkout():void{
    this.workoutStart$.next(false);
  }
}
