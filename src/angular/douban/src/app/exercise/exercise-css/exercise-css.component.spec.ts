import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseCssComponent } from './exercise-css.component';

describe('ExerciseCssComponent', () => {
  let component: ExerciseCssComponent;
  let fixture: ComponentFixture<ExerciseCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
