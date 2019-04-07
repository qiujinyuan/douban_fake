import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseRoutingModule } from './exercise-routing.module';

import { ExerciseComponent } from './exercise.component';
import { ExerciseHomeComponent } from './exercise-home/exercise-home.component';
import { ExerciseCssComponent } from './exercise-css/exercise-css.component';
import { ExerciseD3Component } from './exercise-d3/exercise-d3.component';
import { ExerciseSvgComponent } from './exercise-svg/exercise-svg.component';

@NgModule({
  declarations: [
    ExerciseComponent,
    ExerciseHomeComponent,
    ExerciseCssComponent,
    ExerciseD3Component,
    ExerciseSvgComponent,
  ],
  imports: [
    CommonModule,
    ExerciseRoutingModule
  ]
})
export class ExerciseModule { }
