import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = '豆瓣123';
  showScan = false;

  downLinkImg = '/assets/images/home/icon_qrcode_green.png';
  downScanImg = '/assets/images/home/doubanapp_qrcode.png';

  constructor() { }

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
    // 
    console.log(username + ',' + password);
  }

}
