import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToGroupComponent } from './add-to-group.component';

describe('AddToGroupComponent', () => {
  let component: AddToGroupComponent;
  let fixture: ComponentFixture<AddToGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToGroupComponent]
    });
    fixture = TestBed.createComponent(AddToGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
