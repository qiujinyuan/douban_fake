import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {

  book$: Observable<Book>;

  @Output() deleteRequest = new EventEmitter<Book>();

  displayNone = '';
  lineThrough = '';
  itemImageUrl = '/assets/images/home/icon_qrcode_green.png';


  // evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BookService
  ) { }

  ngOnInit() {
    this.book$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getBook(params.get('id')))
    );
  }

  ngOnDestroy() {
    console.log(`destroy book: ${this.book$}`);
  }

  delete() {
    // this.deleteRequest.emit(this.book$);
    this.displayNone = this.displayNone ? '' : 'none';
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }

  gotoBook(book: Book) {
    const bookId = book ? book.id : null;
    this.router.navigate(['/book', { id: bookId, foo: 'foo' }]);
  }

}
