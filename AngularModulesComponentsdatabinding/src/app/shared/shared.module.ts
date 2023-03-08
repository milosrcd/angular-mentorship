import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PaginationComponent,
    SearchComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatIconModule
  ],
  exports: [PaginationComponent, SearchComponent, FilterComponent]
})
export class SharedModule { }
