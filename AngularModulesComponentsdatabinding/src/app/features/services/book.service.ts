import { Injectable } from '@angular/core';
import { BookDetails } from '../models/book-details.model';
import { Observable } from 'rxjs';
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

  delete(book: BookDetails): Observable<any>{
    return this.httpClient.delete(`${environment.baseApiUrl}books/${book.id}`);
  }
}
