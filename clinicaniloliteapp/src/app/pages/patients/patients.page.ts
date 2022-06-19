import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './../../model/patient';
import { PatientService } from './../../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.page.html',
  styleUrls: ['./patients.page.scss'],
})
export class PatientsPage implements OnInit {
  patient: Patient;
  patients: Observable<Patient[]>;

  canDismiss = true;
  showModal = false;

  constructor(public patientService: PatientService, private router: Router) {
    this.patients = this.patientService.getPatients();
  }

  ngOnInit() {}

  displayModal() {
    this.showModal = true;
  }

  addPatient() {
    this.patientService.addPatient(this.patient);
    this.router.navigateByUrl('/patients');
    this.showModal = false;
  }

  updatePatient() {
    this.patientService.updatePatient(this.patient);
    this.router.navigateByUrl('/patients');
  }
}
