import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.page.html',
  styleUrls: ['./logup.page.scss'],
})
export class LogupPage implements OnInit {

  email: string;
  password: string;

  constructor(
    private alertController: AlertController,
    public auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  async register() {
    const registerSuccess = await this.auth.register(
      this.email,
      this.password
    );
    if (registerSuccess) {
      this.router.navigateByUrl('/home');
    } else {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Conexión fallida',
      subHeader: 'No se ha podido completar el registro',
      message: 'El correo electrónico y/o la contraseña no son válidos.',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }
}
