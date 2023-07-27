import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseListComponent } from './components/exercise-list/exercise-list.component';
import { HomeComponent } from './components/home/home.component';
import { SingleTagetComponent } from './components/single-taget/single-taget.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'exercises', component: ExerciseListComponent},
  {path: 'exercises/:targetId', component: SingleTagetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
