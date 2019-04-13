import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-angular',
  templateUrl: './exercise-angular.component.html',
  styleUrls: ['./exercise-angular.component.scss']
})
export class ExerciseAngularComponent implements OnInit {

  fontSizePx = '10';

  currentClass: {};
  currentStyles: {};

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.currentClass = {
        'special': true
      };
      this.currentStyles = {
        'font-style': true ? 'italic' : 'normal',
        'font-weight': true ? 'bold' : 'normal',
        'font-size': true ? '24px' : '12px'
      };
    }, 5000);
  }

}
