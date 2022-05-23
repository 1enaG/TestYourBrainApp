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
import { DropdownComponent } from './dropdown/dropdown.component';
import { PlanningComponent } from './planning/planning.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // for 2-way binding 

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker'; //datepicker!
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//import { MatNativeDateModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material/core'; //date!
import { MatTooltipModule } from '@angular/material/tooltip';
import { PerformanceComponent } from './performance/performance.component';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    RegistrationComponent,
    LoginComponent,
    AccountComponent,
    DashboardComponent,
    CreateComponent,
    DropdownComponent,
    PlanningComponent,
    PerformanceComponent
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
    ReactiveFormsModule, 
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
