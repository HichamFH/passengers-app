import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PassengerDashboardComponent } from './passengers/containers/passenger-dashboard.component';
import { PassengerAddComponent } from './passengers/components/passenger-add/passenger-add.component';

const routes: Routes = [
  {path: 'passengers' , component: PassengerDashboardComponent },
  {path: 'passengers/add' , component: PassengerAddComponent },
  { path: '', redirectTo: '/passengers', pathMatch: 'full' },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
