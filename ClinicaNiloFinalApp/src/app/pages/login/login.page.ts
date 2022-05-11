import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  title = 'Inicio de sesión';

  email: string;
  password: string;

  constructor(
    public authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  async login() {
    const connectionSuccess = await this.authService.login(
      this.email,
      this.password
    );
    if (connectionSuccess) {
      this.router.navigateByUrl('/home');
    } else {
      this.presentAlert();
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Conexión fallida',
      subHeader: 'No se ha podido acceder a la cuenta.',
      message:
        'El correo electrónico y la contraseña proporcionados no son válidos.',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }
}
