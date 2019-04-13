import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseAngularComponent } from './exercise-angular.component';

describe('ExerciseAngularComponent', () => {
  let component: ExerciseAngularComponent;
  let fixture: ComponentFixture<ExerciseAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
