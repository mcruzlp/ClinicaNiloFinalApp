import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppntformPageRoutingModule } from './appntform-routing.module';

import { AppntformPage } from './appntform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppntformPageRoutingModule
  ],
  declarations: [AppntformPage]
})
export class AppntformPageModule {}
