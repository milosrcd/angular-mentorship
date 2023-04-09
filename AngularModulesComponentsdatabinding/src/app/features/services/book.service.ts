import { Injectable } from '@angular/core';
import { BookDetails } from '../models/book-details.model';
import { Category } from '../models/category.enum';
import { Observable, of } from 'rxjs';
import { books } from 'src/app/mocks/mock-books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksList: BookDetails[] = books;

  constructor() { }

  getAll(): Observable<BookDetails[]> {
    return of(this.booksList);
  }
}
