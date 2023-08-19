import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit,} from '@angular/core';
import { ExerciseListService } from 'src/app/services/exercise-list.service';
import { Exercise } from 'src/app/models/exercise';
import { MatDialog,} from '@angular/material/dialog';
import { NewWorkoutComponent } from '../new-workout/new-workout.component';
import { NewWorkoutService } from 'src/app/services/new-workout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {

  public exercises$!: Observable<Exercise[]>;
  public workoutStart$!: Observable<boolean>;
  public showForm: boolean = false;


  constructor(
    private exerciseService:ExerciseListService, 
    private dialogRef: MatDialog, 
    private newWorkoutService: NewWorkoutService){

  }

  ngOnInit(){
    this.exercises$ = this.exerciseService.getExercisesStore();
    // this.exerciseService.init();
    this.workoutStart$ = this.newWorkoutService.getForm();    

  }
  
  public toggleForm(){
    if(this.showForm){
      this.showForm = false;
    }else{this.showForm = true;}
  }


  openPopup(exerciseId: number, exerciseName: string){
    this.dialogRef.open(NewWorkoutComponent,
      {
      width: '60%',
      data: {
        exerciseId: exerciseId,
        exerciseName: exerciseName,
      }}
    );
  }


}
