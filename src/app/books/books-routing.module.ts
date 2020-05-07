import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BooksComponent } from './books.component';


const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    children: [
      {
        path: ':isbn',
        component: BookDetailComponent
      },
      {
        path: '',
        component: BookListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
