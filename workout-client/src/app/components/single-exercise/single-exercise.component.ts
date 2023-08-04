import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from 'src/app/models/exercise';
import { ExerciseListService } from 'src/app/services/exercise-list.service';

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
  public edit: boolean = false;

  constructor(
    private exerciseService: ExerciseListService,
    private route: ActivatedRoute,
    private router: Router,
    ){}

  ngOnInit(){    
    this.route.paramMap.subscribe(value => {
      this.exercise.exerciseId = Number(value.get('exerciseId')!);
    })

    this.getExercise();
    
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
    // this.router.navigate(['/exercises'])
  }

}
