import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDoctorsComponent } from './components/list-doctors/list-doctors.component';
import { FormDoctorComponent } from './components/form-doctor/form-doctor.component';
import { NotpagefoundComponent } from '../notpagefound/notpagefound.component';

const routes: Routes = [
 
    { path: '', redirectTo: '/dashboard/doctors/list', pathMatch: 'full' },
    { path: 'list', component: ListDoctorsComponent},
    { path: 'create', component: FormDoctorComponent },
    { path: '**', component: NotpagefoundComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DoctorsRoutingModule {}
