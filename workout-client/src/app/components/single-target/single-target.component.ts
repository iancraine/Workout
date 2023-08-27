import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Exercise } from 'src/app/models/exercise';
import { Target } from 'src/app/models/target';
import { ExerciseListService } from 'src/app/services/exercise-list.service';
import { NewWorkoutService } from 'src/app/services/new-workout.service';
import { TargetListService } from 'src/app/services/target-list.service';
import { NewWorkoutComponent } from '../new-workout/new-workout.component';
import { SingleExerciseComponent } from '../single-exercise/single-exercise.component';

@Component({
  selector: 'app-single-target',
  templateUrl: './single-target.component.html',
  styleUrls: ['./single-target.component.css']
})
export class SingleTargetComponent implements OnInit{

  public exercises: Exercise[] = [];
  public targetId: string = '';
  public editTarget: boolean = false;
  public currentTarget: Target = {
    targetId: 0,
    targetName: ''
  };
  public workoutStart$!: Observable<boolean>;


  constructor(
    private exerciseService:ExerciseListService, 
    private route: ActivatedRoute, 
    private targetService:TargetListService,
    private router: Router,
    private newWorkoutService: NewWorkoutService,
    private dialogRef: MatDialog, 
    ){

  }
  ngOnInit(){
    // Set TargetId
    this.route.paramMap.subscribe(value => {
      this.targetId = (value.get('targetId')!);
    })
    // Run methods
    this.getTargetById();
    this.getExercisesByTarget();
    this.workoutStart$ = this.newWorkoutService.getForm();    


  }

  public getExercisesByTarget(): void{
    this.exerciseService.getExercisesByTarget(this.targetId).subscribe(
      (response: Exercise[]) => {
        this.exercises = response;        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  public getTargetById(): void{
    this.targetService.getTargetById(this.targetId).subscribe(
      (response: Target) => {
        this.currentTarget = response;               
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  openPopup(exerciseId: number, exerciseName: string){
    this.dialogRef.open(NewWorkoutComponent,
      {
      width: '80%',
      backdropClass:'popupBackdrop',
      data: {
        exerciseId: exerciseId,
        exerciseName: exerciseName,
      }}
    );
  }

  public toggleForm(){
    if(this.editTarget){
      this.editTarget = false;
      this.getTargetById();
    }else{this.editTarget = true;}    
  }

  updateTarget(){
    this.targetService.modifyTarget(this.currentTarget, String(this.currentTarget.targetId)).subscribe(
      response => {
        location.reload();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  deleteTarget(){
    this.targetService.deleteTarget(String(this.currentTarget.targetId)).subscribe(
      response => {
        this.router.navigate(['/exercises']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  openExercisePopup(exercise: Exercise){
    this.dialogRef.open(SingleExerciseComponent,
      {
      width: '60%',
      backdropClass:'popupBackdrop',
      data: {
        exercise: exercise,
        
      }}
    );
  }

}
