import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

//mycomponents
import { MenuComponent } from './../components/menu/menu.component';
import { TopnavComponent } from './../components/topnav/topnav.component';


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, TopnavComponent, MenuComponent],
})
export class HomePageModule {}
