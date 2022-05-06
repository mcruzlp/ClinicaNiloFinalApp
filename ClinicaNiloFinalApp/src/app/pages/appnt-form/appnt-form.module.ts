import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppntFormPageRoutingModule } from './appnt-form-routing.module';

import { AppntFormPage } from './appnt-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppntFormPageRoutingModule
  ],
  declarations: [AppntFormPage]
})
export class AppntFormPageModule {}
