import { books } from 'src/app/mocks/mock-books';
import { Subject, map, takeUntil, switchMap, take } from 'rxjs';
import { BookDetails } from '../../models/book-details.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Category } from '../../models/category.enum';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/features/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy {
  books: BookDetails[] = [];

  private unsubscribe$: Subject<void> = new Subject<void>;

  constructor(private activatedRouter: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  deleteBook(book: BookDetails): void {
    this.bookService.delete(book)
      .pipe(take(1))
      .subscribe(() => {
        this.getBooks();
      })
  }

  softDeleteBook(book: BookDetails) {
    this.bookService.softDelete(book)
      .pipe(take(1))
      .subscribe(() => {
        this.getBooks();
      })
  }

  private getBooks() {
    this.bookService.getAllBooks()
      .pipe(take(1),
        map((books: BookDetails[]) => books.filter(book => book.deletedAt === null))
      )
      .subscribe(
        response => {
          this.books = response;
        }
      )
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
