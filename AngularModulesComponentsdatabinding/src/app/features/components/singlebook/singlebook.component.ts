import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { BookDetails } from 'src/app/features/models/book-details.model';
import { Category } from 'src/app/features/models/category.enum';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.scss']
})
export class SingleBookComponent implements OnInit {

  bookId: string | null = '';
  singleBook?: BookDetails;

  books: BookDetails[] = [];

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
    this.activatedRouter.paramMap.subscribe(params => {
      const id = params.get('id');
      this.getBookById(id);
    });
  }

}
