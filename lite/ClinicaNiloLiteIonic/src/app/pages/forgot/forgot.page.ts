import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  email: string;
  constructor(
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router
  ) {}
  ngOnInit() {}
  resetPassword() {
    this.authService
      .resetPassword(this.email)
      .then(() => {
        this.alertResetPassword();
        this.router.navigateByUrl('/login');
      })
      .catch(() => this.alertError());
  }
  async alertResetPassword() {
    const alert = await this.alertController.create({
      header: 'Recuperación de contraseña',
      message: `Se le ha enviado un correo electrónico con un enlace
que le permitirá recuperar la contraseña.`,
      buttons: ['Aceptar'],
    });
    await alert.present();
  }
  async alertError() {
    const alert = await this.alertController.create({
      header: 'Recuperación de contraseña',
      message: `No se ha podido enviar correo para reestablecer la contraseña.
Inténtelo de nuevo más tarde.`,
      buttons: ['Aceptar'],
    });
    await alert.present();
  }
}
