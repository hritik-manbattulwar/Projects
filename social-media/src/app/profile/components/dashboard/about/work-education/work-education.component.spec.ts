import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkEducationComponent } from './work-education.component';

describe('WorkEducationComponent', () => {
  let component: WorkEducationComponent;
  let fixture: ComponentFixture<WorkEducationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkEducationComponent]
    });
    fixture = TestBed.createComponent(WorkEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
