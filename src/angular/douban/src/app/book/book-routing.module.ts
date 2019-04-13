import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  {
    path: 'book',
    component: BookComponent,
    children: [
      {
        path: '',
        component: BookListComponent,
        data: { animation: 'books' }
      },
      {
        path: ':id',
        component: BookDetailComponent,
        data: { animation: 'book' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
