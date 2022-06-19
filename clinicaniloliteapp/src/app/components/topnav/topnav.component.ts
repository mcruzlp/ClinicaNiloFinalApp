import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent implements OnInit {
  title: string;

  constructor(
    private menu: MenuController,
    public auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  openMenu() {
    this.menu.enable(true, 'main-menu');
    this.menu.open('main-menu');
  }

  logoff() {
    this.auth.logout();
    this.router.navigateByUrl('/welcome');
  }
}
