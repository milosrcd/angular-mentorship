import { BooksRoutingModule } from './books-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BookComponent } from './components/book/book.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { SharedModule } from "../shared/shared.module";
import { SingleBookComponent } from './components/singlebook/singlebook.component';
import { BookBackgroundDirective } from './directives/book-background.directive';


@NgModule({
    declarations: [
        BookComponent,
        WrapperComponent,
        SingleBookComponent,
        BookBackgroundDirective,
    ],
    exports: [
        BookComponent,
        WrapperComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        SharedModule,
        BooksRoutingModule
    ]
})
export class BooksModule { }
