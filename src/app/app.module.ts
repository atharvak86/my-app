import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PlayerComponent } from './player/player.component';
import { EmployeesDatabaseComponent } from './employees-database/employees-database.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutusComponent,
    LoginComponent,
    ContactUsComponent,
    PlayerComponent,
    EmployeesDatabaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
