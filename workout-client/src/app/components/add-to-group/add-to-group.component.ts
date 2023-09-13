import { Component, Inject, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Exercise } from 'src/app/models/exercise';
import { Target } from 'src/app/models/target';
import { ExerciseListService } from 'src/app/services/exercise-list.service';
import { TargetListService } from 'src/app/services/target-list.service';
import { SingleExerciseComponent } from '../single-exercise/single-exercise.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-to-group',
  templateUrl: './add-to-group.component.html',
  styleUrls: ['./add-to-group.component.css']
})
export class AddToGroupComponent implements OnInit{
  public exercises$!: Observable<Exercise[]>;
  public targetId : Number = 0;
  public selectedExercise!:Exercise;
  public selectedTarget!:Target;
  public targetList: Array<Target> = [];
  public exercise!: Exercise;

  




  constructor(
    private exerciseService:ExerciseListService, 
    private targetService:TargetListService,
    private router: Router,
    private ref: MatDialogRef<SingleExerciseComponent>,
    private targetRef: MatDialogRef<AddToGroupComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any,


    ){

  }

  ngOnInit(): void {
    if(this.data.targetId){
      this.targetId = this.data.targetId;
      this.exercises$ = this.exerciseService.getExercisesStore();
    }
    if(this.data.exercise){
      this.exercise =this.data.exercise;
      this.targetService.getAllTargets().subscribe(
        (data) => {this.targetList = data}
      );
    }    

  }

  submitExercise(exerciseForm: NgForm){
    if(exerciseForm.value.exercise){
      this.selectedExercise = exerciseForm.value.exercise;      
      this.targetService.addExerciseToTarget(this.data.targetId.toString(), this.selectedExercise).subscribe(
        () => {
          location.reload();
          this.closePopup();
        }
      )
    }
    else if(exerciseForm.value.target){
      this.selectedTarget = exerciseForm.value.target;
      
      this.targetService.addExerciseToTarget((this.selectedTarget.targetId).toString(), this.exercise).subscribe(
        () => {
          this.router.navigate([`exercises/${this.selectedTarget.targetId}`]);
          this.closePopup()
        }
      );
    }
  }

  closePopup(){
    this.ref.close();
    this.targetRef.close();
  }
}
