import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWorkoutPopupComponent } from './single-workout-popup.component';

describe('SingleWorkoutPopupComponent', () => {
  let component: SingleWorkoutPopupComponent;
  let fixture: ComponentFixture<SingleWorkoutPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleWorkoutPopupComponent]
    });
    fixture = TestBed.createComponent(SingleWorkoutPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
