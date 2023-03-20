import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';

const routes: Routes = [

  { path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  { path: '**', component: NotpagefoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  DashboardRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
