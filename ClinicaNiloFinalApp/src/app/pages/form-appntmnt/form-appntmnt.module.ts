import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormAppntmntPageRoutingModule } from './form-appntmnt-routing.module';

import { FormAppntmntPage } from './form-appntmnt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormAppntmntPageRoutingModule
  ],
  declarations: [FormAppntmntPage]
})
export class FormAppntmntPageModule {}
