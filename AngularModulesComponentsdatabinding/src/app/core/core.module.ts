import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FeaturesModule } from "../features/features.module";
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        NotFoundComponent,
    ],
    exports: [HeaderComponent, FooterComponent, SidebarComponent],
    imports: [CommonModule, MatSidenavModule, FeaturesModule]
})
export class CoreModule { }
