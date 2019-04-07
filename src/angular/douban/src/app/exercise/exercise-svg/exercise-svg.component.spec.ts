import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseSvgComponent } from './exercise-svg.component';

describe('ExerciseSvgComponent', () => {
  let component: ExerciseSvgComponent;
  let fixture: ComponentFixture<ExerciseSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
