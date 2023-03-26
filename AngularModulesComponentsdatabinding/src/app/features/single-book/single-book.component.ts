import { Component, Input, OnInit } from '@angular/core';
import { BookDetails } from 'src/app/models/bookdetails.model';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {

  @Input()  book!: BookDetails;

  constructor() { }

  ngOnInit(): void {

  }

}
