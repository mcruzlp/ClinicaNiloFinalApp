import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Patient } from './../../model/patient';
import { PatientService } from './../../services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  providers: [MessageService],
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
    public authService: AuthService,
    private messageService: MessageService,
    public patientService: PatientService
  ) {
    this.patients = this.patientService.getPatients();
  }

  ngOnInit() {}

  addPatient() {
    this.formButtonText === 'Añadir paciente';
    this.patientService.addPatient(this.patientForm.value);
  }

  updatePatientStep1(id: string) {
    this.displayPatientForm = true;

    this.patientService.getPatient(id).subscribe((data) => {
      this.patientForm.patchValue(data);
    });

    this.formButtonText = 'Actualizar paciente';
  }

  updatePatientStep2() {
    this.patientService.updatePatient(this.patientForm.value);
    this.formButtonText === 'Añadir paciente';
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
    this.formButtonText === 'Añadir paciente';
  }

  deletePatient() {
    this.patientService.deletePatient(this.idForDeletion);
    this.displayConfirmDelete = false;
  }
}
