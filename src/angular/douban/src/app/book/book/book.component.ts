import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title = '豆瓣读书';
  books: Book[] = [
    new Book(0, '新罕布什尔旅馆', '约翰·欧文', new Date('2019-4'), 51.00),
    new Book(1, '我的帝王生涯', '苏童', new Date('2019-2-20'), 34.50),
    new Book(2, '十问', '史蒂芬·霍金', new Date('2019-3'), 25.99),
    new Book(3, '树下长椅', '克里斯多夫·夏布特', new Date('2019-4'), 71.70),
    new Book(4, '埃及四千年', '乔安·弗莱彻', new Date('2019-3'), 31.99),
    new Book(5, '时间的礼物', '弗雷德里克·巴克曼', new Date('2019-1-1'), 28.80),
    new Book(6, '显微镜下的大明', '马伯庸', new Date('2019-1'), 41.60),
    new Book(7, '英国特工阿申登', '毛姆', new Date('2019-1'), 43.50),
    new Book(8, '四个春天', '陆庆屹', new Date('2019-1-1'), 39.20),
    new Book(9, '何正确吵架', '朱迪斯·莱特 / 鲍勃·莱特', new Date('2019-3'), 31.80),
  ];
  myBook = this.books[0];

  pagination = {
    'pageSize': 3,
    'currentPage': 1,
    'totalItems': this.books.length,
    'lastBtnDisabled': true
  };

  actionName = '上一页';

  badCurly = 'bad curly';

  isSpecial = false;

  keyword = '';

  fontSizePx = '10';

  currentClass: {};
  currentStyles: {};

  currentBooks: Book[] = this.books.slice((this.pagination.currentPage - 1) * this.pagination.pageSize,
    this.pagination.currentPage * this.pagination.pageSize);

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
      this.currentBooks[0].isNew = false;
    }, 5000);
  }

  last = function (): void {
    this.pagination.currentPage--;
    if (this.pagination.currentPage <= 1) {
      // this.pagination.currentPage = Math.ceil(this.pagination.totalItems / this.pagination.pageSize);
      this.pagination.lastBtnDisabled = true;
    }
    this.currentBooks = this.books.slice((this.pagination.currentPage - 1) * this.pagination.pageSize,
      this.pagination.currentPage * this.pagination.pageSize);
  };

  next = function (): void {
    this.pagination.currentPage++;
    this.pagination.lastBtnDisabled = false;
    if (this.pagination.currentPage > Math.ceil(this.pagination.totalItems / this.pagination.pageSize)) {
      this.pagination.currentPage = 1;
      this.pagination.lastBtnDisabled = true;
    }
    this.currentBooks = this.books.slice((this.pagination.currentPage - 1) * this.pagination.pageSize,
      this.pagination.currentPage * this.pagination.pageSize);
  };

  search = function (str: string): void {
    this.keyword = str.toUpperCase();
    this.currentBooks = [];
    this.books.forEach((element: Book) => {
      if (str && element.name.indexOf(str) !== -1) {
        this.currentBooks.push(element);
      }
    });
  };

  deleteHero = function (deleteBook: Book) {
    console.log(deleteBook.toString());
  };

}
