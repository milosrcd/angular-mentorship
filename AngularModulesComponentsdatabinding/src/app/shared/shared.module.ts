import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './components/pagenav/pagenav.component';
import { BookComponent } from './components/book/book.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';



@NgModule({
  declarations: [
    PagesComponent,
    BookComponent,
    WrapperComponent,
    SearchComponent,
    FilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PagesComponent, BookComponent, WrapperComponent, SearchComponent, FilterComponent]
})
export class SharedModule { }
