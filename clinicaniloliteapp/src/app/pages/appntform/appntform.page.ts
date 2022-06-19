import { AppntService } from './../../services/appnt.service';
import { Appointment } from './../../model/appointment';
import { Component, OnInit } from '@angular/core';
import { Patient } from './../../model/patient';
import { PatientsPipe } from './../../pipes/patients.pipe';
import { PatientService } from 'src/app/services/patient.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appntform',
  templateUrl: './appntform.page.html',
  styleUrls: ['./appntform.page.scss'],
})
export class AppntformPage implements OnInit {
  appnt: Appointment;
  appnts: Observable<Appointment[]>;
  patients: Observable<Patient[]>;

  constructor(
    public appntService: AppntService,
    public patientService: PatientService,
    private router: Router
  ) {
    this.appnts = this.appntService.getAppnts();
    this.patients = this.patientService.getPatients();
  }

  ngOnInit() {}

  addAppnt() {
    this.appntService.addAppnt(this.appnt);
    this.router.navigateByUrl('/appnts');
  }

  updateAppnt() {
    this.appntService.updateAppnt(this.appnt);
    this.router.navigateByUrl('/appnts');
  }
}
