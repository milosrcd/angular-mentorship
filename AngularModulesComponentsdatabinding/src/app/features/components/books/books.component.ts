import { Subject, map, take } from 'rxjs';
import { BookDetails } from '../../models/book-details.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/features/services/book.service';
import { DialogSavedFiltersComponent } from '../dialog-saved-filters/dialog-saved-filters.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy {
  books: BookDetails[] = [];
  public displaySearch: string = '';
  public displayCategory: string = '';

  private unsubscribe$: Subject<void> = new Subject<void>;

  constructor(private activatedRouter: ActivatedRoute, private bookService: BookService, private matDialog: MatDialog) { }


  ngOnInit(): void {
    this.getBooks();

    const savedSearch = localStorage.getItem('search');
    const savedFilter = localStorage.getItem('filter');
  }

  showValue(event: string) {
    console.log(event);
    this.displaySearch = event;
  }

  storeCategory(event: string) {
    this.displayCategory = event;
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
    this.matDialog.open(DialogSavedFiltersComponent)
      .afterClosed()
      .subscribe(shouldSave => {
        console.log(shouldSave);
        console.log(this.displaySearch);
        console.log(this.displayCategory);

        if (shouldSave) {
          const filter = {
            displaySearch: this.displaySearch,
            displayCategory: this.displayCategory
          };
          const objToString = JSON.stringify(filter);
          localStorage.setItem('filter', objToString);
          console.log('Filter saved to local storage:', filter);
        }
      });

    localStorage.setItem('search', this.displaySearch);
    localStorage.setItem('filter', this.displayCategory);

  }

}
