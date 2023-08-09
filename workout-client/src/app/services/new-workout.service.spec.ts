import { TestBed } from '@angular/core/testing';

import { NewWorkoutService } from './new-workout.service';

describe('NewWorkoutService', () => {
  let service: NewWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewWorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
