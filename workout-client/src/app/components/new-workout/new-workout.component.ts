import { Component, Inject, OnInit,} from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Exercise } from 'src/app/models/exercise';
import { Workout } from 'src/app/models/workout';
import { ExerciseListService } from 'src/app/services/exercise-list.service';
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

  //Get after workout started
  public currentWorkout$!: Observable<Workout[]>;
  //Get with exerciseId
  public selectedExercise!: Workout;
  //Data from clicked exercise
  // exerciseId:number = 0;
  //Check if Workout is started
  public workoutStart$!: Observable<boolean>;
  public exercises$!: Observable<Exercise[]>;


  constructor(
    private ref: MatDialogRef<NewWorkoutComponent>,
    private newWorkoutService: NewWorkoutService,
    @Inject(MAT_DIALOG_DATA)public data:any,
    private exerciseService:ExerciseListService, 

    ){

  }
  ngOnInit(): void {
    if(this.data != null){
      // this.exerciseId = this.data.exerciseId;
    }
    this.workoutStart$ = this.newWorkoutService.getForm();
    this.currentWorkout$ = this.newWorkoutService.getWorkout();
    this.exercises$ = this.exerciseService.getExercisesStore();

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

  submitExercise(exerciseForm: NgForm){
    this.workout.exerciseId = exerciseForm.value.exerciseId;
    this.workout.setsCompleted = exerciseForm.value.setsCompleted;
    this.workout.repsTime = exerciseForm.value.repsTime;
    this.newWorkoutService.addWorkout(Object.assign({},this.workout));
  }



}
