import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { BookDetails } from 'src/app/features/models/book-details.model';
import { Category } from 'src/app/features/models/category.enum';
import { BookService } from 'src/app/features/services/book.service';
import { Subject, catchError, map, take, takeUntil, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ReadMoreComponent } from '../read-more/read-more.component';



@Component({
  selector: 'app-admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.scss']
})
export class AdminBookComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['imgSrc', 'title', 'author', 'isbn', 'year', 'category', 'description', 'review', 'bookOverview'];
  columns = [
    {
      name: 'title',
      title: 'Title',
      property: 'title'
    },
    {
      name: 'author',
      title: 'Author',
      property: 'author'
    },
    {
      name: 'imgSrc',
      title: 'Image',
      property: 'imgSrc'
    },
    {
      name: 'isbn',
      title: 'ISBN',
      property: 'isbn'
    },
    {
      name: 'year',
      title: 'Year',
      property: 'year'
    },
    {
      name: 'category',
      title: 'Category',
      property: 'category'
    },
    {
      name: 'description',
      title: 'Description',
      property: 'description'
    },
    {
      name: 'review',
      title: 'Review',
      property: 'review'
    },
    {
      name: 'bookOverview',
      title: 'Book Overview',
      property: 'bookOverview'
    }
  ]
  books: BookDetails[] = [];

  private unsubscribe$: Subject<void> = new Subject<void>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private bookService: BookService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBooks();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  readMore(book: BookDetails): void {
    this.dialog.open(ReadMoreComponent,{
      minHeight: '400px',
      width: '30%',
      data: book,
    })
    .afterClosed()
    .subscribe((data: any) => {
      console.log(data);
    })
  }

  private getBooks() {
    this.bookService.getAllWithDeleted()
      .pipe(takeUntil(this.unsubscribe$)
      )
      .subscribe(data => {
        this.books = data;
      })
  }

}
