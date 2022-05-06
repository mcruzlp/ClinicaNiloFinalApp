import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomePageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'forgot',
    loadChildren: () =>
      import('./pages/forgot/forgot.module').then((m) => m.ForgotPageModule),
  },
  {
    path: 'logup',
    loadChildren: () =>
      import('./pages/logup/logup.module').then((m) => m.LogupPageModule),
  },
  {
    path: 'create-appnt',
    loadChildren: () =>
      import('./pages/appnt-form/appnt-form.module').then(
        (m) => m.AppntFormPageModule
      ),
  },
  {
    path: 'edit-appnt/:id',
    loadChildren: () =>
      import('./pages/appnt-form/appnt-form.module').then(
        (m) => m.AppntFormPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
