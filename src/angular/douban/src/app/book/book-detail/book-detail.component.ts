import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {

  @Input() book: Book;

  @Output() deleteRequest = new EventEmitter<Book>();

  displayNone = '';
  lineThrough = '';
  itemImageUrl = '/assets/images/home/icon_qrcode_green.png';


  // evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log(`destroy book: ${this.book.name}`);
  }

  delete() {
    this.deleteRequest.emit(this.book);
    this.displayNone = this.displayNone ? '' : 'none';
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }

}
