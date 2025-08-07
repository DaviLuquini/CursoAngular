import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listatarefas } from './listatarefas';

describe('Listatarefas', () => {
  let component: Listatarefas;
  let fixture: ComponentFixture<Listatarefas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listatarefas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listatarefas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
