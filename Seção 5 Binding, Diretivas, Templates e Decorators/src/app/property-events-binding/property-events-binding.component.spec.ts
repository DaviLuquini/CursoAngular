import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyEventsBindingComponent } from './property-events-binding.component';

describe('PropertyEventsBindingComponent', () => {
  let component: PropertyEventsBindingComponent;
  let fixture: ComponentFixture<PropertyEventsBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyEventsBindingComponent]
    });
    fixture = TestBed.createComponent(PropertyEventsBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
