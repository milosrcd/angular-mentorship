import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/auth/components/login/login.component';
import { LayoutPageComponent } from './core/components/layout-page/layout-page.component';
import { AuthGuard } from './core/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
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
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent
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
