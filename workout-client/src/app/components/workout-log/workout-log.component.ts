import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Workout } from 'src/app/models/workout';
import { WorkoutService } from 'src/app/services/workout.service';
import { SingleWorkoutPopupComponent } from '../single-workout-popup/single-workout-popup.component';

@Component({
  selector: 'app-workout-log',
  templateUrl: './workout-log.component.html',
  styleUrls: ['./workout-log.component.css']
})
export class WorkoutLogComponent implements OnInit{
  public workouts: Array<Array<Workout>> = [];

  constructor(private workoutService: WorkoutService, private dialogRef: MatDialog){

  }
  ngOnInit(){
    this.getAllWorkouts();
  
  }

  public getAllWorkouts(){
    this.workoutService.getAllWorkouts().subscribe(
      (response: Array<Array<Workout>>) => {
        this.workouts = response;        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  openDialog(workoutId: number){
    this.dialogRef.open(SingleWorkoutPopupComponent,
      {
      width: '60%',
      data: {
        workoutId: workoutId
      }}
    );
  }

}
