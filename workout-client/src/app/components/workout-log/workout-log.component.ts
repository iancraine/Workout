import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-workout-log',
  templateUrl: './workout-log.component.html',
  styleUrls: ['./workout-log.component.css']
})
export class WorkoutLogComponent implements OnInit{
  public workouts: Array<Array<Workout>> = [];

  constructor(private workoutService: WorkoutService){

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

}
