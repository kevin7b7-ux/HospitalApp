import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHospitalsComponent } from './components/list-hospitals/list-hospitals.component';
import { FormHospitalsComponent } from './components/form-hospitals/form-hospitals.component';
import { NotpagefoundComponent } from '../notpagefound/notpagefound.component';


const routes: Routes = [

  { path: '', redirectTo: '/dashboard/hospitals/list', pathMatch: 'full'  },
  { path: 'list', component: ListHospitalsComponent },
  { path: 'create', component: FormHospitalsComponent },
  { path: '**', component: NotpagefoundComponent}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HospitalRoutingModule { }
