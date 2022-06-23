import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogupPageRoutingModule } from './logup-routing.module';

import { LogupPage } from './logup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogupPageRoutingModule
  ],
  declarations: [LogupPage]
})
export class LogupPageModule {}
