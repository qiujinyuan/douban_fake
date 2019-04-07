import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { CommonService } from '../common.service';
import { Hero } from './Hero';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
  // encapsulation: ViewEncapsulation.None // 不使用仿真模式，否则 d3 的样式无法生效
})
export class ExerciseComponent implements OnInit {

  // currentItem = 'svg';

  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {
    // this.getHeroes();
    // this.paint();
    // console.log(this.router.routerState);
    // this.router.navigate()
  }

  getHeroes(): void {
    // this.heroes = this.commonService.getHeroes();
    // this.commonService.getHeroes()
    //   .subscribe(heroes => {
    //     this.heroes = heroes;
    //     console.log(this);
    //   });
    // this.commonService.getHeroes()
    //   .subscribe(function (heroes) {
    //     this.heroes = heroes;
    //     console.log(this);
    //   });
  }
}
