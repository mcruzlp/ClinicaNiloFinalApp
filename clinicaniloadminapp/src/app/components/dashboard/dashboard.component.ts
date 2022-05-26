import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Patient } from './../../model/patient';
import { PatientService } from './../../services/patient.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  patients: Observable<Patient[]>;

  patientForm = new FormGroup({
    patientId: new FormControl(),
    pDNI: new FormControl(''),
    pName: new FormControl(''),
    pLastN: new FormControl(''),
    pBDate: new FormControl(''),
    pEmail: new FormControl(''),
    pTlfn: new FormControl(''),
    pAddr: new FormControl(''),
    pFee: new FormControl(''),
  });

  formButtonText = 'Añadir paciente';
  displayPatientForm = false;
  displayConfirmDelete = false;
  idForDeletion = '';
  descriptionForDeletion = '';

  constructor(public patientService: PatientService) {
    this.patients = this.patientService.getPatients();
  }

  ngOnInit(): void {}

  addPatient() {
    this.formButtonText === 'Añadir paciente';
    this.patientService.addPatient(this.patientForm.value);
    this.patientForm.reset();
  }

  updatePatientStep1(id: string) {
    this.displayPatientForm = true;

    this.patientService.getPatient(id).subscribe((data) => {
      this.patientForm.patchValue(data);
    });

    this.formButtonText = 'Actualizar paciente';
    this.patientForm.reset();
  }

  updatePatientStep2() {
    this.patientService.updatePatient(this.patientForm.value);
  }

  formSubmit() {
    this.formButtonText === 'Añadir paciente'
      ? this.addPatient()
      : this.updatePatientStep2();

    this.displayPatientForm = false;
    this.patientForm.reset();
  }

  buttonAddPatient() {
    this.displayPatientForm = true;
    this.formButtonText === 'Añadir paciente';
    this.patientForm.reset();
  }

  cancel() {
    this.displayPatientForm = false;
    this.patientForm.reset();
  }

  confirmDeletePatient(patient: Patient) {
    this.idForDeletion = patient.patientId;
    this.descriptionForDeletion = patient.pName;
    this.displayConfirmDelete = true;
  }

  deletePatient() {
    this.patientService.deletePatient(this.idForDeletion);
    this.displayConfirmDelete = false;
  }

  showPatients() {}
}
