import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise-css',
  templateUrl: './exercise-css.component.html',
  styleUrls: [
    './exercise-css.component.css',
    '../exercise.component.scss',
  ]
})
export class ExerciseCssComponent implements OnInit {

  heroes: Hero[];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  gotoSvg() {
    this.router.navigate(['../svg', { id: '123', foo: 'foo' }], {
      relativeTo: this.route
    });
  }
}
