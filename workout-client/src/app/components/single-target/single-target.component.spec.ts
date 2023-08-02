import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTagetComponent } from './single-target.component';

describe('SingleTagetComponent', () => {
  let component: SingleTagetComponent;
  let fixture: ComponentFixture<SingleTagetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleTagetComponent]
    });
    fixture = TestBed.createComponent(SingleTagetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
