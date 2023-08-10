import { Injectable } from '@angular/core';
import { Workout } from '../models/workout';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewWorkoutService {
  private workout$ = new BehaviorSubject<Workout[]>([]);
  private workoutStart$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  public addWorkout(newWorkout: Workout){

    //Find out why its not skipping after first exericse
    if((this.workout$.value.at(0)?.exerciseId) == 0){
      console.log(this.workout$.value.at(0)?.exerciseId);
      
      let currentValue = this.workout$.value;
      currentValue.at(0)?.exerciseId == newWorkout.exerciseId;
      currentValue.at(0)?.repsTime == newWorkout.repsTime;
      currentValue.at(0)?.setsCompleted == newWorkout.setsCompleted;
      // console.log(currentValue);
      this.workout$.next(currentValue);

    }else{
    let currentValue = this.workout$.value;
    let updatedValue = [...currentValue, newWorkout];
    this.workout$.next(updatedValue);
    }

    // console.log(this.workout$);
 
  }

  public getWorkout(): Observable<Workout[]>{
    return this.workout$
  }

  public getForm(): Observable<boolean>{
    return this.workoutStart$;
  }
  public startWorkout(workoutInfo: Workout):void{
    this.workoutStart$.next(true);
    this.addWorkout(workoutInfo);
  }
  public finishWorkout():void{
    this.workoutStart$.next(false);
  }
}
