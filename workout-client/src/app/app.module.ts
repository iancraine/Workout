import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseListComponent } from 'src/app/components/exercise-list/exercise-list.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TargetListComponent } from './components/target-list/target-list.component';
import { SingleTargetComponent } from './components/single-target/single-target.component';
import { WorkoutLogComponent } from './components/workout-log/workout-log.component';
import { StarredWorkoutListComponent } from './components/starred-workout-list/starred-workout-list.component';
import { NewExerciseComponent } from './components/new-exercise/new-exercise.component';
import { SingleExerciseComponent } from './components/single-exercise/single-exercise.component';
import { NewWorkoutComponent } from './components/new-workout/new-workout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingleWorkoutPopupComponent } from './components/single-workout-popup/single-workout-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseListComponent,
    NavbarComponent,
    HomeComponent,
    TargetListComponent,
    SingleTargetComponent,
    WorkoutLogComponent,
    StarredWorkoutListComponent,
    NewExerciseComponent,
    SingleExerciseComponent,
    NewWorkoutComponent,
    SingleWorkoutPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    // Unused
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
