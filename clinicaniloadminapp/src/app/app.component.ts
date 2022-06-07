import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  login: boolean = true;
  logout: boolean = false;

  constructor(public authService: AuthService) {}
}
