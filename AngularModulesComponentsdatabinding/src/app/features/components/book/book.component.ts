import { Component, Input, OnInit } from '@angular/core';
import { Book-Details } from 'src/app/models/book-details.model';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent{
  @Input()  book!: Book-Details;

  constructor() { }

}

