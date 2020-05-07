import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }

  findAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.baseUrl}/books`);
  }

  findBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${environment.baseUrl}/books/${isbn}`);
  }

}
