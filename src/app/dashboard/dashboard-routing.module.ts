import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent,
  children : [
      { 
      path: 'doctors', 
      loadChildren: ()=> import('../doctors/doctors.module').then( m => m.DoctorsModule)
      },

      {
        path: 'hospitals',
        loadChildren: () => import('../hospitals/hospital.module').then( m => m.HospitalModule)
      }
    ]  
  },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
