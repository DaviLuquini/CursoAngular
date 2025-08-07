import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDone } from './button-done';

describe('ButtonDone', () => {
  let component: ButtonDone;
  let fixture: ComponentFixture<ButtonDone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
