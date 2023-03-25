import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBookComponent } from './components/admin-book/admin-book.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminBookComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
