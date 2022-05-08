import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent implements OnInit {

  title: string;

  constructor(private menu: MenuController) {}

  ngOnInit() {}

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  logout() {}
}
