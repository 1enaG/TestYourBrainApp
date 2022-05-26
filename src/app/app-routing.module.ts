import { GlobalRankingComponent } from './global-ranking/global-ranking.component';
import { PersonalTestsComponent } from './personal-tests/personal-tests.component';
import { PreviewComponent } from './preview/preview.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CreateComponent } from './create/create.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component'; 
import { AccountComponent } from './account/account.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlanningComponent } from './planning/planning.component';
import { PerformanceComponent } from './performance/performance.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'registration-component', component: RegistrationComponent },
  { path: 'login-component', component: LoginComponent },
  { path: 'account-component', component: AccountComponent },
  { path: 'dashboard-component', component: DashboardComponent }, 
  { path: 'create-component', component: CreateComponent }, 
  { path: 'planning-component', component: PlanningComponent }, 
  { path: 'performance-component', component: PerformanceComponent }, 
  { path: 'change-password-component', component: ChangePasswordComponent }, 
  { path: 'preview-component', component: PreviewComponent }, 
  { path: 'personal-tests-component', component: PersonalTestsComponent }, 
  { path: 'global-ranking-component', component: GlobalRankingComponent }, 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
