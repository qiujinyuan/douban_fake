import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-svg',
  templateUrl: './exercise-svg.component.html',
  styleUrls: ['./exercise-svg.component.scss', '../exercise.component.scss', ]
})
export class ExerciseSvgComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    const myCircle = document.getElementById('myCircle00');
    myCircle.addEventListener('click', (e) => {
      console.log('circle clicked');
      myCircle.setAttribute('r', '60');
    });
    console.log(new XMLSerializer()
      .serializeToString(document.getElementById('mySvg')));
    this.svgToCanvas();
  }

  // svg 图像转换为 canvas 图像
  svgToCanvas() {
    const svgString = new XMLSerializer()
      .serializeToString(document.getElementById('mySvg'));
    const img = new Image();
    const svg = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    // @ts-ignore
    const DOMURL = self.URL || self.webkitURL || self;
    const url = DOMURL.createObjectURL(svg);
    img.src = url;
    img.onload = function () {
      const canvas = document.getElementById('canvas');
      // @ts-ignore
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
    };
  }

}
