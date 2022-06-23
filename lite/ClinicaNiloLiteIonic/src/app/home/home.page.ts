import { AlertController } from '@ionic/angular';
import { Appointment } from './../model/appointment';
import { AppntService } from './../services/appnt.service';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
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
  appnts: Observable<Appointment[]>;

  constructor(
    public appntService: AppntService,
    public authService: AuthService,
    private alertController: AlertController,
    public patientService: PatientService,
    private router: Router
  ) {
    this.appnts = this.appntService.getAppnts();
  }

  bookAppnt() {
    this.router.navigateByUrl('/appntform');
  }
}
