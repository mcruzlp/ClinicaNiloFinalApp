import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientformPageRoutingModule } from './patientform-routing.module';

import { PatientformPage } from './patientform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientformPageRoutingModule
  ],
  declarations: [PatientformPage]
})
export class PatientformPageModule {}
