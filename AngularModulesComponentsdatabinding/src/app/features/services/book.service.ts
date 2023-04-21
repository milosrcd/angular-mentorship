import { BookDetails } from 'src/app/features/models/book-details.model';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getAllBooks(): Observable<BookDetails[]> {
    return this.httpClient.get<BookDetails[]>(`${environment.baseApiUrl}books`);
  }

  getAllWithDeleted(): Observable<BookDetails[]> {
    return this.httpClient.get<BookDetails[]>(`${environment.baseApiUrl}books`).pipe(
      catchError((error: any) => {
        console.log('Error:', error);
        return throwError(
          () => new Error('Ooops! Something went wrong.')
        )
      })
    )
  }

  getBookById(id: number): Observable<BookDetails> {
    return this.httpClient.get<BookDetails>(`${environment.baseApiUrl}books/${id}`);
  }

  delete(book: BookDetails): Observable<BookDetails> {
    return this.httpClient.delete<BookDetails>
      (`${environment.baseApiUrl}books/${book.id}`);
  }

  softDelete(book: BookDetails): Observable<BookDetails> {
    const deleted = new Date().toISOString();
    return this.httpClient.patch<BookDetails>(`${environment.baseApiUrl}books/${book.id}`, { deletedAt: deleted })
      .pipe(
        map((book: BookDetails) => {
          book.deletedAt = new Date(deleted);
          return book;
        })
      );
  }
}
