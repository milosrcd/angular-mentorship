import { BooksRoutingModule } from './books-routing.module';
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
import { SaveFiltersGuard } from '../../guards/save-filters.guard';
import { ConfirmDeactivateGuardGuard } from '../../guards/confirm-deactivate-guard.guard';
import { FullNamePipe } from 'src/app/core/auth/pipes/full-name.pipe';

@NgModule({
  declarations: [
    BookComponent,
    BooksComponent,
    SingleBookComponent,
    BookBackgroundDirective,
    FullNamePipe
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule,
    BooksRoutingModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [
    HttpClientModule,
    SaveFiltersGuard,
    ConfirmDeactivateGuardGuard
  ]
})
export class BooksModule { }
