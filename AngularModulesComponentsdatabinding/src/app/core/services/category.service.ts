import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Categories } from '../interfaces/category.interface';
import { environment } from '@env';
import { Category } from 'src/app/features/models/category.enum';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAllCategories(): Observable<Categories[]> {
    return this.httpClient.get<Categories[]>(`${environment.baseApiUrl}categories`)
      .pipe(
        map(categories => categories.map(category =>
        (
          {
            id: category.id,
            name: category.name as Category
          }
        ))
        )
      );
  }
}
