import { Injectable } from '@angular/core';
import { CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { SingleBookComponent } from '../singlebook/singlebook.component';
import { ExitBookModalComponent } from '../exit-book-modal/exit-book-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDeactivateGuardGuard implements CanDeactivate<SingleBookComponent> {

  constructor(private matDialog: MatDialog) { }

  canDeactivate(component: SingleBookComponent): Observable<boolean> {
    const modal = this.matDialog.open(ExitBookModalComponent);
    const result$ = modal.afterClosed().pipe<boolean>(
      map((shouldClose) => {
        if (shouldClose) {
          return true;
        } else {
          return false;
        }
      })
    );
    return result$;
  }

}
