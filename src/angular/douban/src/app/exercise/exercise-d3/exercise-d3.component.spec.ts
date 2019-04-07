import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseD3Component } from './exercise-d3.component';

describe('ExerciseD3Component', () => {
  let component: ExerciseD3Component;
  let fixture: ComponentFixture<ExerciseD3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseD3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
