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

  downLinkImg = '/assets/images/home/icon_qrcode_green.png';
  downScanImg = '/assets/images/home/doubanapp_qrcode.png';

  constructor(private router: Router) {
   }

  ngOnInit() {
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
