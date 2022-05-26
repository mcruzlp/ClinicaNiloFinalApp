import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from './../../model/patient';
import { PatientService } from 'src/app/services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.page.html',
  styleUrls: ['./logup.page.scss'],
})
export class LogupPage implements OnInit {
  title = 'Registro';

  password: string;

  patient: Patient = {
    pName: '',
    pLastN: '',
    pDNI: '',
    pBDate: '',
    pTlfn: '',
    pAddr: '',
    pEmail: '',
    pFee: '',/*,
    pRegDate: '' */};

  constructor(
    private alertController: AlertController,
    public authService: AuthService,
    public patientService: PatientService,
    private router: Router,
  ) {}

  ngOnInit() {}

  async register() {
    const registerSuccess = await this.authService.register(
      this.patient.pEmail,
      this.password
    );
    if (registerSuccess) {
      this.router.navigateByUrl('/home');
      this.patientService.addPatient(this.patient);
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
