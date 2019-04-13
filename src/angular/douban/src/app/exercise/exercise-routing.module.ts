import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseComponent } from './exercise.component';
import { ExerciseHomeComponent } from './exercise-home/exercise-home.component';
import { ExerciseCssComponent } from './exercise-css/exercise-css.component';
import { ExerciseSvgComponent } from './exercise-svg/exercise-svg.component';
import { ExerciseD3Component } from './exercise-d3/exercise-d3.component';
import { ExerciseAngularComponent } from './exercise-angular/exercise-angular.component';

const routes: Routes = [
  {
    path: 'exercise',
    component: ExerciseComponent,
    children: [
      {
        path: '',
        component: ExerciseHomeComponent,
        children: [
          {
            path: 'css',
            component: ExerciseCssComponent
          },
          {
            path: 'svg',
            component: ExerciseSvgComponent
          },
          {
            path: 'd3',
            component: ExerciseD3Component
          },
          {
            path: '',
            component: ExerciseAngularComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseRoutingModule { }
