import { PrimengModule } from './../primeNg/primeng/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDoctorsComponent } from './components/list-doctors/list-doctors.component';
import { DoctorsRoutingModule } from './doctors-routing.module';
import { FormDoctorComponent } from './components/form-doctor/form-doctor.component';
import  { ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages'; 




@NgModule({
  declarations: [
    ListDoctorsComponent,
    FormDoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
    MessagesModule
  ]
})
export class DoctorsModule { }
