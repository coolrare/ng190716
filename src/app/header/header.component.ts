import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'The Will Will Web';
  subtitle = '記載著 <strong>Will</strong> 在網路世界的學習心得與技術分享';
  imgurl = '/assets/images/logo.png';
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  changeTitle(isCtrlClicked: boolean) {
    this.counter++;
    if (isCtrlClicked) {
      this.sitename += '!';
    }
  }

}
