import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppntsPage } from './appnts.page';

const routes: Routes = [
  {
    path: '',
    component: AppntsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppntsPageRoutingModule {}
