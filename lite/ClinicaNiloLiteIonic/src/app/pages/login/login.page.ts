import { LocalService } from './../../services/local.service';
import { LocalUser } from './../../model/localuser';
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
  email: string;
  password: string;
  userEmail: LocalUser = {localUserEmail: ''};
  remember: boolean = false;

  constructor(
    private alertController: AlertController,
    public authService: AuthService,
    public localService: LocalService,
    private router: Router
  ) {}

  ngOnInit() {}

  async login() {
    const connectionSuccess = await this.authService.login(
      this.email,
      this.password
    );
    if (connectionSuccess) {
      if (this.remember) {
        this.localService.saveLocalData(this.remember, this.email);
      }
      this.router.navigateByUrl('/appnts');
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
