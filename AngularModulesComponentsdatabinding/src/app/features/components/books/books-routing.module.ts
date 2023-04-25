import { BooksComponent } from './books.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SingleBookComponent } from '../singlebook/singlebook.component';
import { SaveFiltersGuard } from '../guards/save-filters.guard';
import { ConfirmDeactivateGuardGuard } from '../guards/confirm-deactivate-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    canDeactivate: [SaveFiltersGuard]
  },
  {
    path: 'book/:id',
    component: SingleBookComponent,
    canDeactivate: [ConfirmDeactivateGuardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {

}
