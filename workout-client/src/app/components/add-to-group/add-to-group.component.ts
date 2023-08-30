import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Exercise } from 'src/app/models/exercise';
import { Target } from 'src/app/models/target';
import { ExerciseListService } from 'src/app/services/exercise-list.service';
import { TargetListService } from 'src/app/services/target-list.service';
import { SingleExerciseComponent } from '../single-exercise/single-exercise.component';
import { MatDialogRef } from '@angular/material/dialog';

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

  


  @Input() target!: Target;
  @Input() exercise!: Exercise;


  constructor(
    private exerciseService:ExerciseListService, 
    private targetService:TargetListService,
    private router: Router,
    private ref: MatDialogRef<SingleExerciseComponent>,

    ){

  }

  ngOnInit(): void {
    if(this.target){
      this.targetId = this.target.targetId;
      this.exercises$ = this.exerciseService.getExercisesStore();
    }
    if(this.exercise){
      this.targetService.getAllTargets().subscribe(
        (data) => {this.targetList = data}
      );
    }
    console.log(this.targetId);
    

  }

  submitExercise(exerciseForm: NgForm){
    if(exerciseForm.value.exercise){
      this.selectedExercise = exerciseForm.value.exercise;      
      this.targetService.addExerciseToTarget(this.targetId.toString(), this.selectedExercise).subscribe(
        () => {
          location.reload();
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
  }


}
