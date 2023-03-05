import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BookComponent } from './components/book/book.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';



@NgModule({
  declarations: [
    PaginationComponent,
    BookComponent,
    WrapperComponent,
    SearchComponent,
    FilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PaginationComponent, BookComponent, WrapperComponent, SearchComponent, FilterComponent]
})
export class SharedModule { }
