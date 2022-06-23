import { AlertController } from '@ionic/angular';
import { Appointment } from './../model/appointment';
import { AppntService } from './../services/appnt.service';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { DoctorsPipe } from './../pipes/doctors.pipe';
import { Observable } from 'rxjs';
import { Patient } from './../model/patient';
import { PatientService } from './../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  appointments: Observable<Appointment[]> = this.appntService.getAppnts();

  constructor(
    public appntService: AppntService,
    public authService: AuthService,
    private alertController: AlertController,
    public patientService: PatientService,
    private router: Router
  ) {}

  bookAppnt() {
    this.router.navigateByUrl('/books');
  }
}