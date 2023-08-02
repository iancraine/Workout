import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseListComponent } from './components/exercise-list/exercise-list.component';
import { HomeComponent } from './components/home/home.component';
import { SingleTargetComponent } from './components/single-target/single-target.component';
import { WorkoutLogComponent } from './components/workout-log/workout-log.component';
import { StarredWorkoutListComponent } from './components/starred-workout-list/starred-workout-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'exercises', component: ExerciseListComponent},
  {path: 'exercises/:targetId', component: SingleTargetComponent},
  {path: 'workouts', component: WorkoutLogComponent},
  {path: 'starred', component: StarredWorkoutListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
