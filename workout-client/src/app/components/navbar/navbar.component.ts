import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NewWorkoutComponent } from '../new-workout/new-workout.component';
import { ExerciseListService } from 'src/app/services/exercise-list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dialogRef: MatDialog,
    private exerciseService: ExerciseListService){
  }

  ngOnInit(): void {
    this.exerciseService.init();
  }

  openDialog(){
    this.dialogRef.open(NewWorkoutComponent,{
      width: "50%"
    })
  }
}
