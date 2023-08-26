import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Workout } from 'src/app/models/workout';
import { WorkoutService } from 'src/app/services/workout.service';
import { SingleWorkoutPopupComponent } from '../single-workout-popup/single-workout-popup.component';

@Component({
  selector: 'app-starred-workout-list',
  templateUrl: './starred-workout-list.component.html',
  styleUrls: ['./starred-workout-list.component.css']
})
export class StarredWorkoutListComponent implements OnInit{
  public workouts: Array<Array<Workout>> = [];

  constructor(private workoutService: WorkoutService, private dialogRef: MatDialog){

  }
  ngOnInit(){
    this.getStarredWorkouts();
  
  }

  public getStarredWorkouts(){
    this.workoutService.getStarredWorkouts().subscribe(
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
      width: '80%',
      backdropClass:'popupBackdrop',
      data: {
        workoutId: workoutId
      }}
    );
  }

}

