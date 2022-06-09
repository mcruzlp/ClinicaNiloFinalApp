import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from './../../model/doctor';
import { DoctorService } from './../../services/doctor.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  providers: [MessageService],
})
export class WelcomeComponent implements OnInit {
  password: string = '';

  doctor: Doctor = {
    dName: '',
    dLastN: '',
    dGraduate: '',
    dTlfn: 0,
    dEmail: '',
  };

  constructor(
    public authService: AuthService,
    public doctorService: DoctorService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async login() {
    const connectionSuccess = await this.authService.login(
      this.doctor.dEmail,
      this.password
    );
    if (connectionSuccess) {
      this.router.navigateByUrl('/dashboard');
    } else {
      this.loginPresentAlert();
    }
  }
  async loginPresentAlert() {
    const alert = await this.messageService.add({
      severity: 'error',
      summary: 'Conexión fallida',
      detail:
        'No se ha podido acceder a la cuenta. El correo electrónico y/o la contraseña proporcionados no son válidos.',
    });
    await alert;
  }
}
