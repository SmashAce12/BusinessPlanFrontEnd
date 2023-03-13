import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';
import { PatientComponent } from './patient';
import { ReportComponent } from './report';
import { LoginComponent } from './login';
import { AboutUsComponent } from './about-us';
import { OurAiComponent } from './our-ai';
import { DemoComponent } from './demo';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'patient', component: PatientComponent},
  {path: 'report', component: ReportComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'our-ai', component: OurAiComponent},
  {path: 'demo', component: DemoComponent},

  //directs to home in all other cases
  {path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
