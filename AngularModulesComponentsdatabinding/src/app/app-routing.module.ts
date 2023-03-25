import { SingleBookComponent } from './features/single-book/single-book.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapperComponent } from './features/wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/features/features.module').then((module) => module.FeaturesModule),
  },
  {
    path: 'book/:bookId',
    component: SingleBookComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('../app/admin/admin.module').then((module) => module.AdminModule),
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
