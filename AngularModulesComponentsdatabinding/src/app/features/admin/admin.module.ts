import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { AdminBookComponent } from './components/admin-book/admin-book.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AdminBookComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule
  ]
})
export class AdminModule { }
