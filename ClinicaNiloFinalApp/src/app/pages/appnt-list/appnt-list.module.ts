import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppntListPageRoutingModule } from './appnt-list-routing.module';

import { AppntListPage } from './appnt-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppntListPageRoutingModule
  ],
  declarations: [AppntListPage]
})
export class AppntListPageModule {}
