import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  logged: boolean = true;

  constructor(public authService: AuthService) {}

  /* isLogged(): boolean {
    if (this.authService.getCurrentUser() != null) {
      return this.logged = true;
    }
  } */
}
