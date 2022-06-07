import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  providers: [MessageService],
})
export class WelcomeComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    public authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async login() {
    const connectionSuccess = await this.authService.login(
      this.email,
      this.password
    );
    if (connectionSuccess) {
      this.router.navigateByUrl('/dashboard');
    } else {
      this.presentAlert();
    }
  }
  async presentAlert() {
    const alert = await this.messageService.add({
      severity: 'error',
      summary: 'Conexión fallida',
      detail:
        'No se ha podido acceder a la cuenta. El correo electrónico y/o la contraseña proporcionados no son válidos.',
    });
    await alert;
  }
}
