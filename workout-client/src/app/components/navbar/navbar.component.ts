import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NewWorkoutComponent } from '../new-workout/new-workout.component';
import { ExerciseListService } from 'src/app/services/exercise-list.service';
import { NewWorkoutService } from 'src/app/services/new-workout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public workoutStart$!: Observable<boolean>;


  constructor(private dialogRef: MatDialog,
    private exerciseService: ExerciseListService,
    private newWorkoutService: NewWorkoutService){
  }

  ngOnInit(): void {
    this.exerciseService.init();
    this.workoutStart$ = this.newWorkoutService.getForm();

  }

  openDialog(){
    this.dialogRef.open(NewWorkoutComponent,{
      width: "80%",
      backdropClass:'popupBackdrop',
    })
  }
}
