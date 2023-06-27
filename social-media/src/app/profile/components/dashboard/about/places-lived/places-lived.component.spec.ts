import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesLivedComponent } from './places-lived.component';

describe('PlacesLivedComponent', () => {
  let component: PlacesLivedComponent;
  let fixture: ComponentFixture<PlacesLivedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacesLivedComponent]
    });
    fixture = TestBed.createComponent(PlacesLivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
