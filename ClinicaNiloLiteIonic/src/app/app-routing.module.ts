import {
  AuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['appnts']);

const routes: Routes = [
  /* {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  }, */
  {
    path: '',
    redirectTo: 'wlcm',
    pathMatch: 'full',
  },
  {
    path: 'patients',
    loadChildren: () =>
      import('./pages/patients/patients.module').then(
        (m) => m.PatientsPageModule
      ),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'create-patientform',
    loadChildren: () =>
      import('./pages/patientform/patientform.module').then(
        (m) => m.PatientformPageModule
      ),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'edit-patientform/:id',
    loadChildren: () =>
      import('./pages/patientform/patientform.module').then(
        (m) => m.PatientformPageModule
      ),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'appnts',
    loadChildren: () =>
      import('./pages/appnts/appnts.module').then((m) => m.AppntsPageModule),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'create-appntform',
    loadChildren: () =>
      import('./pages/appntform/appntform.module').then(
        (m) => m.AppntformPageModule
      ),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'edit-appntform/:id',
    loadChildren: () =>
      import('./pages/appntform/appntform.module').then(
        (m) => m.AppntformPageModule
      ),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'logup',
    loadChildren: () =>
      import('./pages/logup/logup.module').then((m) => m.LogupPageModule),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome },
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome },
  },
  {
    path: 'wlcm',
    loadChildren: () =>
      import('./pages/wlcm/wlcm.module').then((m) => m.WlcmPageModule),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome },
  },
  {
    path: 'forgot',
    loadChildren: () =>
      import('./pages/forgot/forgot.module').then((m) => m.ForgotPageModule),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome },
  },
  {
    path: '**',
    redirectTo: 'appnts',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
