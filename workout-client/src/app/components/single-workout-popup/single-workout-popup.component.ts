import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, concatMap, forkJoin, of, tap } from 'rxjs';
import { Exercise } from 'src/app/models/exercise';
import { Workout } from 'src/app/models/workout';
import { ExerciseListService } from 'src/app/services/exercise-list.service';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-single-workout-popup',
  templateUrl: './single-workout-popup.component.html',
  styleUrls: ['./single-workout-popup.component.css']
})
export class SingleWorkoutPopupComponent implements OnInit{

  public workout: any = [
    {
      workoutId: 0,
      workoutName: '',
      workoutDate: new Date,
      workoutNote: '',
      exerciseId: 0,
      setsCompleted: 0,
      repsTime: '',
      favorite: false,
      exerciseName: ''
    }
  ];
  public exercises$!: Observable<Exercise[]>;
  public workout$:any;


  constructor(
    private ref: MatDialogRef<SingleWorkoutPopupComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any,
    private workoutService: WorkoutService,
    private exerciseService: ExerciseListService
    ){

  }
  
  ngOnInit(): void {
    this.workoutService.getWorkoutById(this.data.workoutId).subscribe(
      (response) => {this.workout = response;}
    );
    

    // this.workout$ = of(this.workout).pipe(
    //   concatMap((exercises) => forkJoin(
    //     ...exercises.map((exercise) =>this.exerciseService.getExerciseById(exercise.exerciseId.toString()).pipe(
    //       tap((exerciseName) => exercise.exerciseName = exerciseName)
    //     ))
    //   ))
    // )

    this.exercises$ = this.exerciseService.getExercisesStore();

    
  }

  closePopup(){
    this.ref.close();
  }



  //Not good to use on ngFor Look into forkJoin on getWorkoutById service
  getExerciseName(exerciseId: number){
    this.exerciseService.getExerciseById(exerciseId.toString()).toPromise().then(
      result => {
        return result?.exerciseName;
      }
    )

    // this.exerciseService.getExerciseById(exerciseId.toString()).subscribe(
    //   exercise => {
    //     // console.log(exercise);
        
        
    //     return exercise.exerciseName;
    //   }
      
    // ).unsubscribe;
    
  }

  ngOnDestroy(){

  }

}
