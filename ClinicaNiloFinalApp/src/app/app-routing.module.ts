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
    path: 'patients',
    loadChildren: () =>
      import('./pages/patients/patients.module').then(
        (m) => m.PatientsPageModule
      ),
  },
  {
    path: 'dates',
    loadChildren: () =>
      import('./pages/dates/dates.module').then((m) => m.DatesPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'new-appntmnt',
    loadChildren: () =>
      import('./pages/form-appntmnt/form-appntmnt.module').then(
        (m) => m.FormAppntmntPageModule
      ),
  },
  {
    path: 'edit-appntmnt/:id',
    loadChildren: () =>
      import('./pages/form-appntmnt/form-appntmnt.module').then(
        (m) => m.FormAppntmntPageModule
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
