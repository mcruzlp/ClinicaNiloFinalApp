import {
  AuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppntsComponent } from './components/appnts/appnts.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogupComponent } from './components/logup/logup.component';
import { PatientsComponent } from './components/patients/patients.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['welcome']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['appnts']);

const routes: Routes = [
  {
    path: 'appnts',
    component: AppntsComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'logup',
    component: LogupComponent,
    /* canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInTo }, */
  },
  {
    path: 'patients',
    component: PatientsComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
