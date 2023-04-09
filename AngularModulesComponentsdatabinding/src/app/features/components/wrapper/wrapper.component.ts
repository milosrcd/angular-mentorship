import { Subject, takeUntil } from 'rxjs';
import { BookDetails } from '../../models/book-details.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Category } from '../../models/category.enum';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/features/services/book.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<void> = new Subject<void>;

  books: BookDetails[] = [];

  constructor(private activatedRouter: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks() {
    this.bookService.getAll().pipe(
      takeUntil(this.unsubscribe$)
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
