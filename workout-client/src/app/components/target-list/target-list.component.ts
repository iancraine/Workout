import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Target } from 'src/app/models/target';
import { ExerciseListService } from 'src/app/services/exercise-list.service';
import { TargetListService } from 'src/app/services/target-list.service';

@Component({
  selector: 'app-target-list',
  templateUrl: './target-list.component.html',
  styleUrls: ['./target-list.component.css']
})
export class TargetListComponent {

  public targets: Target[] = [];
  public showForm: boolean = false;
  public newTarget!: Target;

  constructor(private targetService:TargetListService, private exerciseService:ExerciseListService){

  }

  ngOnInit(){
    this.getAllTargets();
  }

  public getAllTargets(): void{
    this.targetService.getAllTargets().subscribe(
      (response: Target[]) => {
        this.targets = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  public toggleForm(){
    if(this.showForm){
      this.showForm = false;
    }else{this.showForm = true;}    
  }

  onSubmit(targetForm: NgForm){
    this.newTarget = targetForm.value;
    this.addTargetToDb();
  }
  
  addTargetToDb(){
    this.targetService.addTarget(this.newTarget).subscribe(
      response => {
        location.reload();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  


}
