import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Exercise } from 'src/app/models/exercise';
import { ExerciseListService } from 'src/app/services/exercise-list.service';

@Component({
  selector: 'app-new-exercise',
  templateUrl: './new-exercise.component.html',
  styleUrls: ['./new-exercise.component.css']
})
export class NewExerciseComponent {
  public newExercise!: Exercise;
  public image: any;

  constructor(private exerciseService: ExerciseListService){}


  onSubmit(exerciseForm: NgForm){
    this.newExercise = exerciseForm.value;
    this.newExercise.exercisePic = this.image;    
    this.addExerciseToDb();
    
  }

  getValue(exerciseName: any){
    console.log(exerciseName);
    
  }
  public addExerciseToDb(): void{
    this.exerciseService.addExercise(this.newExercise).subscribe(
      response => {
        location.reload();
        // this.clear();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }
  onFileChange(event:any) {
    let file = event.target.files[0];
    if (file){
      let reader = new FileReader;
      reader.onload = event => {
        this.image = event.target?.result;
        console.log(this.image);

      };
      reader.readAsDataURL(file);
      


    }
  }
}
