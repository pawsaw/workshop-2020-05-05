import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


@NgModule({
  declarations: [BooksComponent, BookListComponent, BookDetailComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule
  ],
  exports: [BooksComponent, BookListComponent]
})
export class BooksModule { }
