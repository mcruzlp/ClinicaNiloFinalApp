import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppntsPageRoutingModule } from './appnts-routing.module';

import { AppntsPage } from './appnts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppntsPageRoutingModule
  ],
  declarations: [AppntsPage]
})
export class AppntsPageModule {}
