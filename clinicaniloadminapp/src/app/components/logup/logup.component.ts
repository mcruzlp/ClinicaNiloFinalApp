import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from './../../model/doctor';
import { DoctorService } from './../../services/doctor.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.scss'],
  providers: [MessageService],
})
export class LogupComponent implements OnInit {
  password: string = '';

  doctor: Doctor = {
    dName: '',
    dLastN: '',
    dGraduate: '',
    dTlfn: '',
    dEmail: '',
  };

  constructor(
    public authService: AuthService,
    public doctorService: DoctorService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async register() {
    const registerSuccess = await this.authService.register(
      this.doctor.dEmail,
      this.password
    );
    if (registerSuccess) {
      this.router.navigateByUrl('/appnts');
      this.doctorService.addDoctor(this.doctor);
    } else {
      this.presentAlert();
    }
  }
  async presentAlert() {
    const alert = await this.messageService.add({
      severity: 'error',
      summary: 'Conexión fallida',
      detail:
        'No se ha podido completar el registro. El correo electrónico y/o la contraseña no son válidos.',
    });
    await alert;
  }

  cancel() {
    this.router.navigateByUrl('/welcome');
  }
}
