import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { DialogSavedFiltersComponent } from '../dialog-saved-filters/dialog-saved-filters.component';
import { BooksComponent } from '../books/books.component';

@Injectable({
  providedIn: 'root'
})
export class SaveFiltersGuard implements CanDeactivate<BooksComponent> {

  constructor(private matDialog: MatDialog) { }

  canDeactivate(component: BooksComponent): Observable<boolean> {

    const modal = this.matDialog.open(DialogSavedFiltersComponent);

    const observable = modal
      .afterClosed()
      .pipe<boolean>(map((shouldSave: boolean) => {
        if (shouldSave) {
          const filter = {
            displaySearch: component.displaySearch,
            displayCategory: component.displayCategory
          };
          const objToString = JSON.stringify(filter);
          localStorage.setItem('filter', objToString);
        }
        return shouldSave;
      }))

    return observable;
  }

}
