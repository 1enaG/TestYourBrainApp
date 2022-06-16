import { AuthGuard } from './services/auth-guard.service';
import { ReportGeneratorComponent } from './report-generator/report-generator.component';
import { PassComponent } from './pass/pass.component';
import { DevApiComponent } from './dev-api/dev-api.component';
import { EditComponent } from './edit/edit.component';
import { PostsComponent } from './posts/posts.component';
import { ResultsComponent } from './results/results.component';
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
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { TestingResultComponent } from './testing-result/testing-result.component';

const routes: Routes = [
  { path: 'registration-component', component: RegistrationComponent },
  { path: 'login-component', component: LoginComponent },
  { path: 'account-component', component: AccountComponent, canActivate: [AuthGuard] },
  { path: 'dashboard-component', component: DashboardComponent, canActivate: [AuthGuard] }, 
  { path: 'create-component', component: CreateComponent, canActivate: [AuthGuard]}, 
  { path: 'planning-component', component: PlanningComponent, canActivate: [AuthGuard] }, 
  { path: 'performance-component', component: PerformanceComponent, canActivate: [AuthGuard] }, 
  { path: 'change-password-component', component: ChangePasswordComponent, canActivate: [AuthGuard] }, 
  { path: 'preview-component', component: PreviewComponent, canActivate: [AuthGuard] }, 
  { path: 'personal-tests-component', component: PersonalTestsComponent, canActivate: [AuthGuard] }, 
  { path: 'global-ranking-component', component: GlobalRankingComponent }, 
  { path: 'results-component', component: ResultsComponent, canActivate: [AuthGuard] }, 
  { path: 'posts-component', component: PostsComponent, canActivate: [AuthGuard] }, 
  { path: 'edit-component', component: EditComponent, canActivate: [AuthGuard] }, 

  { path: 'edit-component/:testId', component: EditComponent, canActivate: [AuthGuard] }, 
  { path: 'dev-api-component', component: DevApiComponent }, 
  { path: 'pass-component/:testId', component: PassComponent }, 
  { path: 'testing-result-component/:score', component: TestingResultComponent }, 
  { path: 'report-generator-component', component: ReportGeneratorComponent, canActivate: [AuthGuard] }, 
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
