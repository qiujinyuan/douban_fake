import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { CommonService } from '../common.service';
import { Hero } from './Hero';
import { schemeGnBu } from 'd3';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
  encapsulation: ViewEncapsulation.None // 不使用仿真模式，否则 d3 的样式无法生效
})
export class ExerciseComponent implements OnInit {

  heroes: Hero[];

  currentItem = 'd3';

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    // this.getHeroes();
    this.paint();
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

  /**
   * d3 绘图部分
   */

  print() {
    // let p = d3.select('body')
    //   .selectAll('p')
    //   .text('www');
    // p.style('color', 'red')
    //   .style('font-size', '72px');
    const body = d3.select('body');
    const p = body.selectAll('p');
    const str = 'china';
    p.datum(str);
    p.text((d, i) => {
      return `第${i}个元素绑定的数据是${d}`;
    });
    const dataset = ['I like dog', 'I like cat', 'I like snake'];
    p.data(dataset)
      .text((d, i) => {
        return d;
      });
    d3.select('p')
      .style('color', 'red');
    body.select('#pear')
      .style('color', 'green');
    // p.append('p')
    //   .text('append p ele');
    const div3 = d3.select('#div3');
    // 只能插入到 childNodes 中，不能跨节点
    div3.insert('p', '#pear').text('insert p ele');
    setTimeout(() => {
      div3.remove();
    }, 2000);
  }

  paint() {
    const width = 300;
    const height = 300;
    const svg = d3.select('#canvas')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('background-color', 'green');
    const dataset = [2.5, 2.1, 1.7, 1.3, 0.9, 8];
    // 线性比例尺
    const linear = d3.scaleLinear()
      .domain([0, d3.max(dataset)])
      .range([0, 300]);
    // 坐标轴
    const axis = d3.axisBottom(linear)
      .ticks(8, 's');
    const rectHeight = 25;
    svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', 20)
      .attr('y', (d, i) => {
        return i * rectHeight;
      })
      .attr('width', (d, i) => {
        return linear(d);
      })
      .attr('height', rectHeight - 2)
      .attr('fill', 'steelblue');
    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(20, 250)')
      .call(axis);
  }

  getXAxisText(index: number) {
    const provinces = ['北京', '上海', '西安', '南京', '天津', '成都', '重庆', '安康'];
    return provinces[index];
  }

  paintColumnChart() {
    const width = 400;
    const height = 400;
    const svg = d3.select('#column-chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height);
    const padding = {
      left: 30,
      right: 30,
      top: 20,
      bottom: 20
    };
    const dataset = [10, 20, 30, 40, 33, 24, 12, 5];
    const xScale = d3.scaleBand()
      .domain(d3.range(dataset.length).map((d) => {
        return this.getXAxisText(d);
      }))
      .range([0, width - padding.left - padding.right]);
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset)])
      .range([height - padding.top - padding.bottom, 0]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    const rectPadding = 4;
    svg.selectAll('.MyRect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('class', 'MyRect')
      .attr('transform', `translate(${padding.left},${padding.top})`)
      .attr('x', (d, i) => {
        return xScale(this.getXAxisText(i)) + rectPadding / 2;
      })
      .attr('y', (d, i) => {
        return yScale(d);
      })
      .attr('width', xScale.bandwidth() - rectPadding)
      .attr('height', (d) => {
        return height - padding.top - padding.bottom - yScale(d);
      });
    svg.selectAll('.MyText')
      .data(dataset)
      .enter()
      .append('text')
      .attr('class', 'MyText')
      .attr('transform', `translate(${padding.left},${padding.top})`)
      .attr('x', (d, i) => {
        return xScale(this.getXAxisText(i)) + rectPadding / 2;
      })
      .attr('y', (d) => {
        return yScale(d);
      })
      .attr('dx', () => {
        return (xScale.bandwidth() - rectPadding) / 2;
      })
      .attr('dy', (d) => {
        return 20;
      })
      .text((d) => {
        return d;
      });
    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(${padding.left},${height - padding.bottom})`)
      .call(xAxis);
    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(${padding.left},${padding.top})`)
      .call(yAxis);
  }

  paintExampleChart() {
    const randomX = d3.randomUniform(0, 10),
      randomY = d3.randomNormal(0.5, 0.12),
      data = d3.range(800).map(function () { return [randomX(), randomY()]; });

    const svg = d3.select('svg'),
      margin = { top: 194, right: 50, bottom: 214, left: 50 },
      width = +svg.attr('width') - margin.left - margin.right,
      height = +svg.attr('height') - margin.top - margin.bottom,
      g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    const x = d3.scaleLinear()
      .domain([0, 10])
      .range([0, width]);

    const y = d3.scaleLinear()
      .range([height, 0]);

    const brush = d3.brushX()
      .extent([[0, 0], [width, height]])
      .on('start brush', brushed);

    const dot = g.append('g')
      .attr('fill-opacity', 0.2)
      .selectAll('circle')
      .data(data)
      .enter().append('circle')
      .attr('transform', function (d) { return 'translate(' + x(d[0]) + ',' + y(d[1]) + ')'; })
      .attr('r', 3.5);

    g.append('g')
      .call(brush)
      .call(brush.move, [3, 5].map(x))
      .selectAll('.overlay')
      .on('mousedown touchstart', beforebrushed, true);

    g.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));

    function beforebrushed() {
      d3.event.stopImmediatePropagation();
      d3.select(this.parentNode).transition().call(brush.move, x.range());
    }

    function brushed() {
      const extent = d3.event.selection.map(x.invert, x);
      dot.classed('selected', function (d) { return extent[0] <= d[0] && d[0] <= extent[1]; });
    }
  }
}
