import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogupPage } from './logup.page';

const routes: Routes = [
  {
    path: '',
    component: LogupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogupPageRoutingModule {}
