import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BooksModule } from './features/components/books/books.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DialogSavedFiltersComponent } from './features/components/dialog-saved-filters/dialog-saved-filters.component';
import { ExitBookModalComponent } from './features/components/exit-book-modal/exit-book-modal.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from './features/interceptors/http-request.interceptor';


@NgModule({
  declarations: [AppComponent, DialogSavedFiltersComponent, ExitBookModalComponent],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    BooksModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
