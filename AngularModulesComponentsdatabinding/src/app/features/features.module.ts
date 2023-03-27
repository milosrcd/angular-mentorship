import { FeaturesRoutingMOdule } from './features-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BookComponent } from '../features/book/book.component';
import { WrapperComponent } from '../features/wrapper/wrapper.component';
import { SharedModule } from "../shared/shared.module";
import { SingleBookComponent } from './single-book/single-book.component';
import { BookBackgroundDirective } from './directives/book-background.directive';


@NgModule({
    declarations: [
        BookComponent,
        WrapperComponent,
        SingleBookComponent,
        BookBackgroundDirective
    ],
    exports: [
        BookComponent,
        WrapperComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        SharedModule,
        FeaturesRoutingMOdule
    ]
})
export class FeaturesModule { }
