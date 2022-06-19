import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientformPage } from './patientform.page';

const routes: Routes = [
  {
    path: '',
    component: PatientformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientformPageRoutingModule {}
