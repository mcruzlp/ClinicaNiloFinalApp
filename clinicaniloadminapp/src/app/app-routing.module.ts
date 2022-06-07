import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppntsComponent } from './components/appnts/appnts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { PatientsComponent } from './components/patients/patients.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: 'appnts', component: AppntsComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'welcome', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
