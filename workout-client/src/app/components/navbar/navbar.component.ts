import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NewWorkoutComponent } from '../new-workout/new-workout.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private dialogRef: MatDialog){
  }

  openDialog(){
    this.dialogRef.open(NewWorkoutComponent,{
      width: "50%"
    })
  }
}
