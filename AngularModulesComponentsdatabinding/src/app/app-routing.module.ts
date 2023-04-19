import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/components/books/books.module').then((module) => module.BooksModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('../app/features/admin/admin.module').then((module) => module.AdminModule),
  },
  {
    path: 'categories',
    loadChildren: () => import('../app/core/core.module').then((module) => module.CoreModule),
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
