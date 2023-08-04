import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleExerciseComponent } from './single-exercise.component';

describe('SingleExerciseComponent', () => {
  let component: SingleExerciseComponent;
  let fixture: ComponentFixture<SingleExerciseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleExerciseComponent]
    });
    fixture = TestBed.createComponent(SingleExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
