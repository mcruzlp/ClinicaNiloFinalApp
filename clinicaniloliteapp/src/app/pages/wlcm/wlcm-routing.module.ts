import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WlcmPage } from './wlcm.page';

const routes: Routes = [
  {
    path: '',
    component: WlcmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WlcmPageRoutingModule {}
