import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Patient } from './../../model/patient';
import { PatientService } from './../../services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  patients: Observable<Patient[]>;

  patient: Patient = {
    patientId: '',
    pName: '',
    pLastN: '',
    pDNI: '',
    pBDate: '',
    pTlfn: '',
    pAddr: '',
    pEmail: '',
    pFee: '',
  };

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

  constructor(
    public patientService: PatientService
  ) {
    this.patients = this.patientService.getPatients();
  }

  ngOnInit() {}

  addPatient() {
    this.formButtonText = 'Añadir paciente';
    this.patientService.addPatient(this.patientForm.value);
    this.patientForm.reset();
  }

  openEditForm(id: string) {
    this.displayPatientForm = true;
    this.formButtonText = 'Actualizar paciente';
    this.patientService.getPatient(id).subscribe((data) => {
      this.patientForm.patchValue(data);
    });
    this.patientForm.reset();
  }

  updatePatient() {
    this.patientService.updatePatient(this.patientForm.value);
  }

  formSubmit() {
    this.formButtonText === 'Añadir paciente'
      ? this.addPatient()
      : this.updatePatient();
    this.displayPatientForm = false;
    this.patientForm.reset();
  }

  buttonAddPatient() {
    this.displayPatientForm = true;
    this.formButtonText = 'Añadir paciente';
    this.patientForm.reset();
  }

  cancel() {
    this.displayPatientForm = false;
    this.patientForm.reset();
    this.formButtonText = 'Añadir paciente';
  }
}
