import { BooksRoutingModule } from './books-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from '../book/book.component';
import { SingleBookComponent } from '../singlebook/singlebook.component';
import { BookBackgroundDirective } from '../../directives/book-background.directive';
import { BooksComponent } from './books.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    BookComponent,
    BooksComponent,
    SingleBookComponent,
    BookBackgroundDirective
  ],
  exports: [
    BookComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule,
    BooksRoutingModule,
    HttpClientModule,
    MatDialogModule
  ]
})
export class BooksModule { }
