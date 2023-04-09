import { Component, Input, OnInit } from '@angular/core';
import { BookDetails } from '../../models/book-details.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent{
  @Input()  book!: BookDetails;

  constructor() { }

}

