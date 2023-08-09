import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExercisePopupComponent } from './add-exercise-popup.component';

describe('AddExercisePopupComponent', () => {
  let component: AddExercisePopupComponent;
  let fixture: ComponentFixture<AddExercisePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddExercisePopupComponent]
    });
    fixture = TestBed.createComponent(AddExercisePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
