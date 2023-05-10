import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookDetails } from '../../models/book-details.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book!: BookDetails;
  @Output() delete = new EventEmitter();
  @Output() softDelete = new EventEmitter();

  constructor() { }

  onDelete(){
    this.delete.emit();
  }

  onSoftDelete(){
    this.softDelete.emit();
  }

}

