import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Countries } from '../../interfaces/countries.interface';
import { Observable, map } from 'rxjs';
import { environment } from '@env';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  getAllCountries(): Observable<Countries[]> {
    return this.httpClient.get<Countries[]>(`${environment.baseApiUrl}countries`)
      .pipe(
        map(countries => countries.map(country =>
        (
          {
            id: country.id,
            name: country.name
          }
        ))
        )
      );
  }
}
