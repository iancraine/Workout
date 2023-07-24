import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExerciseListService } from 'src/app/services/exercise-list.service';
import { Exercise } from 'src/app/models/exercise';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {


  public exercises: Exercise[] = [];

  constructor(private exerciseService:ExerciseListService){

  }
  ngOnInit(){
    this.getAllExercises();
  }

  public getAllExercises() : void{
    this.exerciseService.getAllExercises().subscribe(
      (response: Exercise[]) => {
        this.exercises = response;
      }, 
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

}
