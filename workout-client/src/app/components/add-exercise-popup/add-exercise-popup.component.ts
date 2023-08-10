import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NewWorkoutComponent } from '../new-workout/new-workout.component';

@Component({
  selector: 'app-add-exercise-popup',
  templateUrl: './add-exercise-popup.component.html',
  styleUrls: ['./add-exercise-popup.component.css']
})
export class AddExercisePopupComponent {

  constructor(
    private ref: MatDialogRef<NewWorkoutComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any,

    ){

  }

}
