import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Hero } from './Hero';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  heroes: Hero[];

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroes = this.commonService.getHeroes();
    this.commonService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
        console.log(this);
      });
    // this.commonService.getHeroes()
    //   .subscribe(function (heroes) {
    //     this.heroes = heroes;
    //     console.log(this);
    //   });
  }

}
