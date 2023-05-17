import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { AdminBookComponent } from './components/admin-book/admin-book.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BooksTableComponent } from './components/books-table/books-table.component';

@NgModule({
  declarations: [
    AdminBookComponent,
    ReadMoreComponent,
    BooksTableComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule
  ]
})
export class AdminModule { }
