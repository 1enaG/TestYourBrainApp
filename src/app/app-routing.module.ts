import { CreateComponent } from './create/create.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component'; 
import { AccountComponent } from './account/account.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'registration-component', component: RegistrationComponent },
  { path: 'login-component', component: LoginComponent },
  { path: 'account-component', component: AccountComponent },
  { path: 'dashboard-component', component: DashboardComponent }, 
  { path: 'create-component', component: CreateComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
