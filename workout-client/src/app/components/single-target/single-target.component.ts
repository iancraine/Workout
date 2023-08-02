import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from 'src/app/models/exercise';
import { Target } from 'src/app/models/target';
import { ExerciseListService } from 'src/app/services/exercise-list.service';
import { TargetListService } from 'src/app/services/target-list.service';

@Component({
  selector: 'app-single-target',
  templateUrl: './single-target.component.html',
  styleUrls: ['./single-target.component.css']
})
export class SingleTargetComponent implements OnInit{

  public exercises: Exercise[] = [];
  public targetId: string = '';
  public targetName: string = '';

  constructor(
    private exerciseService:ExerciseListService, 
    private route: ActivatedRoute, 
    private targetService:TargetListService
    ){

  }
  ngOnInit(){
    // Set TargetId
    this.route.paramMap.subscribe(value => {
      this.targetId = (value.get('targetId')!);
    })
    // Run methods
    this.getExercisesByTarget();
    this.getTargetById();
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
        this.targetName = response.targetName;               
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

}
