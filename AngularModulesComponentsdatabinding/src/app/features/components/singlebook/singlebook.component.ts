import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { BookDetails } from 'src/app/features/models/book-details.model';
import { Category } from 'src/app/features/models/category.enum';
import { BookService } from '../../services/book.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.scss']
})
export class SingleBookComponent implements OnInit, OnDestroy {

  bookId: string | null = '';
  singleBook?: BookDetails;

  books: BookDetails[] = [];

  private unsubscribe$: Subject<void> = new Subject<void>;

  constructor(private activatedRouter: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    this.getBookId();
  }

  private getBookById(id: string | null) {
    if (id) {
      this.bookService.getBookById(+id).subscribe(book => {
        this.singleBook = book;
      });
    }
  }

  private getBookId() {
    this.activatedRouter.paramMap
    .pipe(
      takeUntil(this.unsubscribe$)
    )
    .subscribe(params => {
      const id = params.get('id');
      this.getBookById(id);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
