import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-starred-workout-list',
  templateUrl: './starred-workout-list.component.html',
  styleUrls: ['./starred-workout-list.component.css']
})
export class StarredWorkoutListComponent implements OnInit{
  public workouts: Array<Array<Workout>> = [];

  constructor(private workoutService: WorkoutService){

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

}

