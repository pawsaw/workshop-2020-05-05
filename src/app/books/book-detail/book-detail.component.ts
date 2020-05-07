import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface BookDatailComponentParams {
  isbn: string;
}

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book$: Observable<Book>; // !!!

  // 1. Parameter isbn
  // 2. Book using service
  // 3. Assign loaded book to this.book

  constructor(
    private route: ActivatedRoute,
    private bookData: BookDataService) { }

  ngOnInit() {

    // switchMap (map outerObservable to innerObservable)

    this.book$ = this.route.params.pipe(
      switchMap(({ isbn }: BookDatailComponentParams) => this.bookData.findBookByIsbn(isbn))
    );

    // this.route.params.subscribe(({ isbn }: BookDatailComponentParams) => {
    //   this.bookData.findBookByIsbn(isbn).subscribe((book: Book) => {
    //     this.book =  book;
    //   });
    // });
  }

}
