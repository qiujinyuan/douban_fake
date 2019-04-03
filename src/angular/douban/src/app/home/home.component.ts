import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, RouterState, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = '豆瓣';
  showScan = false;

  notSure: any = 4;

  downLinkImg = '/assets/images/home/icon_qrcode_green.png';
  downScanImg = '/assets/images/home/doubanapp_qrcode.png';

  constructor(private router: Router) {
   }

  ngOnInit() {
    let prettySure: Object = 4;
    // prettySure.toFixed();
    let list: any[] = [1, 'aa', true];
    try {
      const neverVar: never = error('123');
      const unsuable1: never = neverVar;
      console.log(unsuable1);

    } catch (e) {
      console.log(e);
    } finally {
      console.log('catch error');
    }

    function error(message: string): never {
      throw new Error(message);
    }

  }


  search(str: string): void {
    console.log(str);
  }

  // 展示二维码
  showDownScan(): void {
    this.showScan = true;
  }

  disappearDownScan(): void {
    this.showScan = false;
  }

  // 登陆
  login(username: string, password: string) {
    // 登陆
    console.log(this.router);
    this.router.navigate(['/movie']);
    console.log(username + ',' + password);
  }

}
