import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WlcmPageRoutingModule } from './wlcm-routing.module';

import { WlcmPage } from './wlcm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WlcmPageRoutingModule
  ],
  declarations: [WlcmPage]
})
export class WlcmPageModule {}
