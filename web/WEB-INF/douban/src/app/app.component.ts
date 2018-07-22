import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private location: Location
  ) { }

  title = '豆瓣';

  // 是否登陆
  isMainPage = true;

  search(str: string): void {
    console.log(str);
  }

  // 手动改变路由
  changeRoute(nextPage: string): void {
    // this.isMainPage = false;
    this.location.go(nextPage);
  }
}
