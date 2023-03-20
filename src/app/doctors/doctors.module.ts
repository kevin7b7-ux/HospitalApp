import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDoctorsComponent } from './components/list-doctors/list-doctors.component';
import { DoctorsRoutingModule } from './doctors-routing.module';
import { FormDoctorComponent } from './components/form-doctor/form-doctor.component';



@NgModule({
  declarations: [
    ListDoctorsComponent,
    FormDoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule
  ]
})
export class DoctorsModule { }
