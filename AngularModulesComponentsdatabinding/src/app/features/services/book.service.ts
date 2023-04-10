import { Injectable } from '@angular/core';
import { BookDetails } from '../models/book-details.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getAllBooks(): Observable<BookDetails[]> {
    return this.httpClient.get<BookDetails[]>("http://localhost:5000/books");
  }
}
