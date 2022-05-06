import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppntFormPage } from './appnt-form.page';

const routes: Routes = [
  {
    path: '',
    component: AppntFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppntFormPageRoutingModule {}
