import { Appointment } from './../../model/appointment';
import { AppntService } from './../../services/appnt.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Patient } from './../../model/patient';
import { PatientService } from './../../services/patient.service';

@Component({
  selector: 'app-appnts',
  templateUrl: './appnts.component.html',
  styleUrls: ['./appnts.component.scss'],
})
export class AppntsComponent implements OnInit {
  appnts: Observable<Appointment[]>;
  patients: Observable<Patient[]>;
  selectedPatient: Patient = {
    pName: '',
    pLastN: '',
    pDNI: '',
    pBDate: '',
    pTlfn: '',
    pAddr: '',
    pEmail: '',
  };

  appntForm = new FormGroup({
    dName: new FormControl(''), //getCurrentUser
    pName: new FormControl(''),
    pLastN: new FormControl(''),
    date: new FormControl(''),
  });

  formButtonText = 'Añadir cita';
  displayAppntForm = false;
  displayConfirmDelete = false;
  idForDeletion = '';
  descriptionForDeletion = '';

  constructor(
    public appntService: AppntService,
    public patientService: PatientService
  ) {
    this.appnts = this.appntService.getAppnts();
    this.patients = this.patientService.getPatients();
  }

  ngOnInit() {}

  addAppnt() {
    this.formButtonText === 'Añadir cita';
    this.appntService.addAppnt(this.appntForm.value);
    this.appntForm.reset();
  }

  updateAppntStep1(id: string) {
    this.displayAppntForm = true;

    this.appntService.getAppnt(id).subscribe((data) => {
      this.appntForm.patchValue(data);
    });

    this.formButtonText = 'Actualizar cita';
    this.appntForm.reset();
  }

  updateAppntStep2() {
    this.appntService.updateAppnt(this.appntForm.value);
    this.appntForm.reset();
  }

  formSubmit() {
    this.formButtonText === 'Añadir cita'
      ? this.addAppnt()
      : this.updateAppntStep2();

    this.displayAppntForm = false;
    this.appntForm.reset();
  }

  buttonAddAppnt() {
    this.displayAppntForm = true;
    this.formButtonText === 'Añadir cita';
    this.appntForm.reset();
  }

  cancel() {
    this.displayAppntForm = false;
    this.appntForm.reset();
  }

  confirmDeleteAppnt(appnt: Appointment) {
    this.idForDeletion = appnt.appntId;
    this.descriptionForDeletion = appnt.pName;
    this.displayConfirmDelete = true;
  }

  deleteAppnt() {
    this.appntService.deleteAppnt(this.idForDeletion);
    this.displayConfirmDelete = false;
  }
}
