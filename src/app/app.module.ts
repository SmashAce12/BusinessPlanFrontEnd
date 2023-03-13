import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportComponent } from './report/report.component';
import { PatientComponent } from './patient';
import { LoginComponent } from './login';
import { AboutUsComponent } from './about-us';
import { OurAiComponent } from './our-ai/our-ai.component';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientComponent,
    ReportComponent,
    LoginComponent,
    AboutUsComponent,
    OurAiComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
