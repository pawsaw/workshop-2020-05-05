import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]> = of([]);

  constructor(private bookData: BookDataService) { }

  ngOnInit() {
    this.books$ = this.bookData.findAllBooks();
  }
}
