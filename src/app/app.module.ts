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
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { DropdownComponent } from './dropdown/dropdown.component'; // for 2-way binding 

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    RegistrationComponent,
    LoginComponent,
    AccountComponent,
    DashboardComponent,
    CreateComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FontAwesomeModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
