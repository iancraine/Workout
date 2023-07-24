import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseListComponent } from 'src/app/components/exercise-list/exercise-list.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TargetListComponent } from './components/target-list/target-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseListComponent,
    NavbarComponent,
    HomeComponent,
    TargetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
