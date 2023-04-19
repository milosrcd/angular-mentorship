import { BooksComponent } from './books.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SingleBookComponent } from '../singlebook/singlebook.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent
  },
  {
    path: 'book/:id',
    component: SingleBookComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {

}
