import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BookComponent } from '../features/book/book.component';
import { WrapperComponent } from '../features/wrapper/wrapper.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        BookComponent,
        WrapperComponent
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
