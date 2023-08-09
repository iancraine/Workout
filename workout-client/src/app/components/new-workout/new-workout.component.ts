import { Component, Inject, OnInit,} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Workout } from 'src/app/models/workout';
import { NewWorkoutService } from 'src/app/services/new-workout.service';


@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.component.html',
  styleUrls: ['./new-workout.component.css']
})
export class NewWorkoutComponent implements OnInit {
  workout: Workout = {
    workoutId: 0,
    workoutName: '',
    workoutDate: new Date,
    workoutNote: '',
    exerciseId: 0,
    setsCompleted: 0,
    repsTime: '',
    favorite: false
  };
  public currentWorkout: Workout[] = [];
  //Get with exerciseId
  public selectedExercise!: Workout;
  //Data from clicked exercise
  exerciseId:number = 0;
  //Check if Workout is started
  public workoutStart$!: Observable<boolean>;

  constructor(
    private ref: MatDialogRef<NewWorkoutComponent>,
    private newWorkoutService: NewWorkoutService,
    @Inject(MAT_DIALOG_DATA)public data:any,
    private router: Router,
    ){

  }
  ngOnInit(): void {
    if(this.data != null){
      this.exerciseId = this.data.exerciseId;
    }
    this.workoutStart$ = this.newWorkoutService.getForm();
    console.log(this.workoutStart$);
  }

  closePopup(){
    this.ref.close();
  }

  startWorkout(){
    this.newWorkoutService.startWorkout();
  }

  finishWorkout(){
    this.newWorkoutService.finishWorkout();
  }



}
