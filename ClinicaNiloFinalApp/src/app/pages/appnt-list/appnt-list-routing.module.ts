import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppntListPage } from './appnt-list.page';

const routes: Routes = [
  {
    path: '',
    component: AppntListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppntListPageRoutingModule {}
