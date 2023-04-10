import { Component, Input, OnInit } from '@angular/core';
import { BookDetails } from '../../models/book-details.model';
import { BookService } from '../../services/book.service';
import { Subject, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book!: BookDetails;
  private unsubscribe$: Subject<void> = new Subject<void>;

  constructor(private bookService: BookService) { }

  deleteBook(book: BookDetails) {
    this.bookService.delete(book)
      .pipe(
        takeUntil(this.unsubscribe$),
        switchMap((deleteResult) => {
          return this.bookService.getAllBooks();
        })
      )
      .subscribe(data => {
        console.log(data)
      })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}

