import { Component, Input, OnInit } from '@angular/core';
import { BookDetails } from 'src/app/models/bookdetails.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input()  book!: BookDetails;

  constructor() { }

  ngOnInit(): void {
  }

}

