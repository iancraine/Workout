import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredWorkoutListComponent } from './starred-workout-list.component';

describe('StarredWorkoutListComponent', () => {
  let component: StarredWorkoutListComponent;
  let fixture: ComponentFixture<StarredWorkoutListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarredWorkoutListComponent]
    });
    fixture = TestBed.createComponent(StarredWorkoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
