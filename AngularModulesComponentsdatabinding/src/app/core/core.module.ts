import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './auth/components/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { LayoutPageComponent } from './components/layout-page/layout-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/components/register/register.component';
import { CheckValidityPipe } from './auth/pipes/check-validity.pipe';
import { HasErrorPipe } from './auth/pipes/has-error.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NotFoundComponent,
    LoginComponent,
    LayoutPageComponent,
    RegisterComponent,
    CheckValidityPipe,
    HasErrorPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    NotFoundComponent,
    HttpClientModule
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    MatMenuModule,
    RouterModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CoreModule { }
