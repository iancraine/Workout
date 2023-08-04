import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
    SingleExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
