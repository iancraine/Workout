import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public editTarget: boolean = false;
  public currentTarget: Target = {
    targetId: 0,
    targetName: ''
  };


  constructor(
    private exerciseService:ExerciseListService, 
    private route: ActivatedRoute, 
    private targetService:TargetListService,
    private router: Router,
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

}
