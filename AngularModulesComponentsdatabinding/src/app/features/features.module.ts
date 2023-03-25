import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BookComponent } from '../features/book/book.component';
import { WrapperComponent } from '../features/wrapper/wrapper.component';
import { SharedModule } from "../shared/shared.module";
import { SingleBookComponent } from './single-book/single-book.component';


@NgModule({
    declarations: [
        BookComponent,
        WrapperComponent,
        SingleBookComponent
    ],
    exports: [
        BookComponent,
        WrapperComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        SharedModule
    ]
})
export class FeaturesModule { }
