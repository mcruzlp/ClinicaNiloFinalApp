import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppntformPage } from './appntform.page';

const routes: Routes = [
  {
    path: '',
    component: AppntformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppntformPageRoutingModule {}
