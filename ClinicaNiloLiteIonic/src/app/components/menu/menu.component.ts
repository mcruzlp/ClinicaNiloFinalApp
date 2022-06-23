import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public toastController: ToastController
  ) {}

  ngOnInit() {}

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: '',
      message: 'Beta 1.0',
      /* icon: 'information-circle', */
      position: 'middle',
      buttons: [
        {
          side: 'start',
          icon: 'reload-circle-outline',
          text: 'Clínica Nilo',
          handler: () => {
            console.log('Favorite clicked');
          },
        },
        {
          text: 'Cerrar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
