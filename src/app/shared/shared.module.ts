import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PrimengModule } from '../primeNg/primeng/primeng.module';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        SidebarComponent
    ],
    imports: [ CommonModule, RouterModule, PrimengModule ],
    exports: [
        FooterComponent,
        HeaderComponent,
        SidebarComponent
    ],
    providers: [],
})
export class SharedModule {}