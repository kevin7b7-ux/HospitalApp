import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHospitalsComponent } from './components/list-hospitals/list-hospitals.component';
import { FormHospitalsComponent } from './components/form-hospitals/form-hospitals.component';
import { HospitalRoutingModule } from './hospital-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListHospitalsComponent,
    FormHospitalsComponent
  ],
  imports: [
    CommonModule,
    HospitalRoutingModule,
    HttpClientModule
  ]
})
export class HospitalModule { }
