import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BooksModule } from './features/components/books/books.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DialogSavedFiltersComponent } from './features/components/dialog-saved-filters/dialog-saved-filters.component';
import { ExitBookModalComponent } from './features/components/exit-book-modal/exit-book-modal.component';


@NgModule({
  declarations: [AppComponent, DialogSavedFiltersComponent, ExitBookModalComponent],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    BooksModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
