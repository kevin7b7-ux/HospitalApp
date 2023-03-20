import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { SidebarModule } from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import { ChipModule } from 'primeng/chip';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {CardModule} from 'primeng/card';
import { InputTextModule } from "primeng/inputtext";
import { CascadeSelectModule } from "primeng/cascadeselect";
import {FileUploadModule} from 'primeng/fileupload';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarModule, 
    ButtonModule,
    MenuModule,
    MenubarModule,
    ChipModule,
    TieredMenuModule,
    CardModule,
    InputTextModule,
    CascadeSelectModule,
    FileUploadModule
  ]
})
export class PrimengModule { }
