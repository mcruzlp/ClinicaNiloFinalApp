import {
  AuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

// hay guardas para que no entres en la página de login si ya estás registrado y que no entre en la home si no lo estás
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
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
    path: 'forgot',
    loadChildren: () =>
      import('./pages/forgot/forgot.module').then((m) => m.ForgotPageModule),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome },
  },
  {
    path: 'logup',
    loadChildren: () =>
      import('./pages/logup/logup.module').then((m) => m.LogupPageModule),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome },
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfilePageModule),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./pages/books/books.module').then((m) => m.BooksPageModule),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: '**',
    redirectTo: 'home',
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
