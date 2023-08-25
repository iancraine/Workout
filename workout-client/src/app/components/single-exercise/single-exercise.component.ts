import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Exercise } from 'src/app/models/exercise';
import { Workout } from 'src/app/models/workout';
import { ExerciseListService } from 'src/app/services/exercise-list.service';
import { NewWorkoutService } from 'src/app/services/new-workout.service';
import { NewWorkoutComponent } from '../new-workout/new-workout.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-single-exercise',
  templateUrl: './single-exercise.component.html',
  styleUrls: ['./single-exercise.component.css']
})
export class SingleExerciseComponent implements OnInit{
  public exercise: Exercise ={
    exerciseId: 0,
    exerciseName:'',
    exerciseDesc:'',
    exercisePic: ''
  };
  public workoutStart$!: Observable<boolean>;
  public edit: boolean = false;
  exerciseId:number = 0;


  constructor(
    private exerciseService: ExerciseListService,
    private route: ActivatedRoute,
    private router: Router,
    private newWorkoutService: NewWorkoutService,
    private dialogRef: MatDialog,
    @Inject(MAT_DIALOG_DATA)public data:any,


    ){}

  ngOnInit(){    
    // this.route.paramMap.subscribe(value => {
    //   this.exercise.exerciseId = Number(value.get('exerciseId')!);
    // })

    this.exercise = this.data.exercise;
    console.log(this.exerciseId);
    


    // this.getExercise();
    this.workoutStart$ = this.newWorkoutService.getForm();    

    
  }
  getExercise() : void{
    this.exerciseService.getExerciseById(String(this.exercise.exerciseId)).subscribe(
      response => {
        this.exercise = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      });
  }
  public toggleForm(){
    if(this.edit){
      this.edit = false;
      this.getExercise();
    }else{this.edit = true;}    
  }
  onSubmit(){
    this.updateExercise();
  }
  updateExercise(){
    this.exerciseService.modifyExercise(this.exercise, String(this.exercise.exerciseId)).subscribe(
      response => {
        location.reload();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }
  deleteExercise(){
    this.exerciseService.deleteExercise(String(this.exercise.exerciseId)).subscribe(
      response => {
        this.router.navigate(['/exercises']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  openPopup(exerciseId: number, exerciseName: string){
    this.dialogRef.open(NewWorkoutComponent,
      {
      width: '80%',
      data: {
        exerciseId: exerciseId,
        exerciseName: exerciseName,
      }}
    );
  }

}
