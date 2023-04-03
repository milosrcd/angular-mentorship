import { Subject, takeUntil } from 'rxjs';
import { BookDetails } from 'src/app/models/bookdetails.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.enum';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<void> = new Subject<void>;

  books: BookDetails[] = [];

  constructor(private activatedRouter: ActivatedRoute, private bookService: BookService) { }

  // book?: BookDetails;

  ngOnInit(): void {
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
    this.unsubscribe$.complete;
  }

}
