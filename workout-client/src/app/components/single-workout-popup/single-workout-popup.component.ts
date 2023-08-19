import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import { Exercise } from 'src/app/models/exercise';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-single-workout-popup',
  templateUrl: './single-workout-popup.component.html',
  styleUrls: ['./single-workout-popup.component.css']
})
export class SingleWorkoutPopupComponent implements OnInit{
  public edit:boolean = false;

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
    private router: Router,

    ){

  }
  
  ngOnInit(): void {
    this.getWorkout();
  }

  closePopup(){
    this.ref.close();
  }

  toggleForm(){
    if(this.edit){
      this.edit = false;
      // this.getWorkout();
    }else{this.edit = true;}    
  }

  getWorkout() : void{
    this.workoutService.getWorkoutById(this.data.workoutId).subscribe(
      (response) => {this.workout = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      });
  }

  deleteWorkout(){
    this.workoutService.deleteWorkout(String(this.workout[0].workoutId)).subscribe(
      response => {
        this.router.navigate(['/']);
        this.closePopup();


      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  saveWorkout(){
    this.workoutService.modifyWorkout(String(this.workout[0].workoutId), this.workout).subscribe(
      response => {
        this.router.navigate(['/']);
        this.closePopup();


      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }
}
