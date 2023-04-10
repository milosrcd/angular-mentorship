import { Injectable } from '@angular/core';
import { BookDetails } from '../models/book-details.model';
import { Observable, catchError, of } from 'rxjs';
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

  delete(book: BookDetails): Observable<any> {
    return this.httpClient.delete(`${environment.baseApiUrl}books/${book.id}`);
  }

  softDelete(book: BookDetails): Observable<any> {
    const deletedAt = new Date();
    return this.httpClient.patch(`${environment.baseApiUrl}books/${book.id}`, { deletedAt }).pipe(
      catchError(error => {
        console.error(error);
        return of(null);
      })
    );
  }
}
