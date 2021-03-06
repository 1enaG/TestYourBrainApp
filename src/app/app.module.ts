import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { PlanningComponent } from './planning/planning.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // for 2-way binding 
import { HttpClientModule } from '@angular/common/http'; //consuming http services 

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker'; //datepicker!
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//import { MatNativeDateModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material/core'; //date!
import { MatTooltipModule } from '@angular/material/tooltip';
import { PerformanceComponent } from './performance/performance.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PreviewComponent } from './preview/preview.component';
import { ScoreComponent } from './score/score.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { CountComponent } from './count/count.component';
import { PersonalTestsComponent } from './personal-tests/personal-tests.component';
import { GlobalRankingComponent } from './global-ranking/global-ranking.component';
import { ResultsComponent } from './results/results.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './services/posts.service';
import { TestsService } from './services/tests.service';
import { QuestionComponent } from './question/question.component';
import { EditComponent } from './edit/edit.component';

import {MatTabsModule} from '@angular/material/tabs';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TestCountComponent } from './test-count/test-count.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DevApiComponent } from './dev-api/dev-api.component';
import { PassComponent } from './pass/pass.component';
import { TestingResultComponent } from './testing-result/testing-result.component';
import { ReportGeneratorComponent } from './report-generator/report-generator.component';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    RegistrationComponent,
    LoginComponent,
    AccountComponent,
    DashboardComponent,
    CreateComponent,
    PlanningComponent,
    PerformanceComponent,
    ChangePasswordComponent,
    PreviewComponent,
    ScoreComponent,
    TestDetailsComponent,
    PageTitleComponent,
    CountComponent,
    PersonalTestsComponent,
    GlobalRankingComponent,
    ResultsComponent,
    PostsComponent,
    QuestionComponent,
    EditComponent,
    UserDetailsComponent,
    TestCountComponent,
    DevApiComponent,
    PassComponent,
    TestingResultComponent,
    ReportGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FontAwesomeModule, 
    FormsModule, BrowserAnimationsModule, 
    MatSlideToggleModule,
    MatDatepickerModule, // the datepicker!
    MatSelectModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatNativeDateModule, //date!
    MatTooltipModule, 
    MatTabsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    Ng2SearchPipeModule, 
  ],
  providers: [
    PostsService, 
    TestsService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
