import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {}

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/wlcm');
  }
}
