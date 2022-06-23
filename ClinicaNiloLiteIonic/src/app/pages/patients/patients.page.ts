import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientService } from './../../services/patient.service';
import { Patient } from './../../model/patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.page.html',
  styleUrls: ['./patients.page.scss'],
})
export class PatientsPage implements OnInit {
  patients: Observable<Patient[]>;

  constructor(public patientService: PatientService, private router: Router) {
    this.patients = this.patientService.getPatients();
  }

  ngOnInit() {}

  AddPatient() {
    this.router.navigateByUrl('/create-patientform');
  }

  goEditItem(id: string) {
    this.router.navigateByUrl(`edit-patientform/${id}`);
  }
}
