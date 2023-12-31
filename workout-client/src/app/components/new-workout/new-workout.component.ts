import { Component, Inject, OnInit,} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
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
    favorite: false,
    exerciseName: '',
    workoutExerciseId: 0,
  };
  public workoutTitle: string = '';

  //Get after workout started
  public currentWorkout$!: Observable<Workout[]>;
  //Get with exerciseId
  public selectedExercise!: Workout;
  //Data from clicked exercise
  exerciseId:number = 0;
  exerciseName:string ='';
  //Check if Workout is started
  public workoutStart$!: Observable<boolean>;
  public exercises$!: Observable<Exercise[]>;
  public workoutTitleStore: string = '';


  constructor(
    private ref: MatDialogRef<NewWorkoutComponent>,
    private newWorkoutService: NewWorkoutService,
    @Inject(MAT_DIALOG_DATA)public data:any,
    private exerciseService:ExerciseListService, 

    ){

  }
  ngOnInit(): void {
    if(this.data != null){
      this.exerciseId = this.data.exerciseId;
      this.exerciseName = this.data.exerciseName;

    }
    this.workoutStart$ = this.newWorkoutService.getForm();
    this.currentWorkout$ = this.newWorkoutService.getWorkout();
    this.exercises$ = this.exerciseService.getExercisesStore();
    this.newWorkoutService.getWorkoutName().subscribe(
      (data) => {
        this.workoutTitleStore = data;
      }
    );

  }

  closePopup(){
    this.ref.close();
  }

  startWorkout(){
    this.newWorkoutService.startWorkout();
    this.newWorkoutService.setName(this.workoutTitle);
  }

  finishWorkout(){
    this.newWorkoutService.finishWorkout();
    this.closePopup();
  }

  submitExercise(exerciseForm: NgForm){
    if(exerciseForm.value.exerciseId){
      this.workout.exerciseId = exerciseForm.value.exerciseId;

    }
    else{
      this.workout.exerciseId = this.exerciseId;
    }
    this.workout.setsCompleted = exerciseForm.value.setsCompleted;
    this.workout.repsTime = exerciseForm.value.repsTime;
    this.workout.workoutName = this.workoutTitleStore;

    
    this.exerciseService.getExerciseById(this.workout.exerciseId.toString()).subscribe(
      (data) => {
        this.workout.exerciseName = data.exerciseName;
        this.newWorkoutService.addWorkout(Object.assign({},this.workout));

      }
    );

  }

}
