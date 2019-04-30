import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './loans/loans.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoanDetailComponent } from './loan-detail/loan-detail.component';

const routes: Routes = [
  {path : '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'loans', component: LoansComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: LoanDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
