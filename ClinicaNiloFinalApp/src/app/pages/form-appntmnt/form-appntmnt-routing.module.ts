import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormAppntmntPage } from './form-appntmnt.page';

const routes: Routes = [
  {
    path: '',
    component: FormAppntmntPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormAppntmntPageRoutingModule {}
