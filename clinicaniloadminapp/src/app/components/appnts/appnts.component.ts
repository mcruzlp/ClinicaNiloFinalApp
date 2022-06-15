import { Appointment } from './../../model/appointment';
import { AppntService } from './../../services/appnt.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from './../../model/doctor';
import { DoctorService } from './../../services/doctor.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Patient } from './../../model/patient';
import { PatientService } from './../../services/patient.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-appnts',
  templateUrl: './appnts.component.html',
  styleUrls: ['./appnts.component.scss'],
})
export class AppntsComponent implements OnInit {
  appntForm = new FormGroup({
    appntId: new FormControl(),
    date: new FormControl(''),
    doctorId: new FormControl(),
    patientId: new FormControl(''),
  });

  appnts: Observable<Appointment[]>;

  currentAppntId: string = '';
  currentDoctorId: string = '';
  descriptionForDeletion = '';
  displayAppntForm = false;
  displayConfirmDelete = false;
  idForDeletion = '';
  formButtonText = 'Añadir cita';
  patientsItem: SelectItem[] = [];

  constructor(
    public appntService: AppntService,
    public doctorService: DoctorService,
    public patientService: PatientService
  ) {
    this.appnts = this.appntService.getAppnts();
    this.patientService.getPatients().subscribe((data) => {
      this.patientsItem = data.map((p) => {
        return { label: p.pName, value: p.patientId };
      });
    });
  }

  ngOnInit() {}

  addAppnt() {
    this.formButtonText = 'Añadir cita';
    this.appntForm.value.appntId = this.currentAppntId;
    this.appntForm.value.doctorId = this.currentDoctorId;
    this.appntService.addAppnt(this.appntForm.value);
    this.appntForm.reset();
  }

  editForm(id: string) {
    this.currentAppntId = id;
    this.displayAppntForm = true;
    this.formButtonText = 'Actualizar cita';
    this.appntService.getAppnt(id).subscribe((data) => {
      this.appntForm.patchValue(data);
    });
  }

  formSubmit() {
    this.formButtonText === 'Añadir cita'
      ? this.addAppnt()
      : this.updateAppnt();
    this.displayAppntForm = false;
    this.appntForm.reset();
  }

  buttonAddAppnt() {
    this.appntForm.reset();
    this.displayAppntForm = true;
    this.formButtonText = 'Añadir cita';
  }

  cancel() {
    this.displayAppntForm = false;
    this.appntForm.reset();
    this.formButtonText = 'Añadir cita';
  }

  updateAppnt() {
    this.appntService.updateAppnt(this.appntForm.value);
  }

  confirmDeleteAppnt(appnt: Appointment) {
    this.idForDeletion = appnt.appntId;
    this.descriptionForDeletion = appnt.patientId;
    this.displayConfirmDelete = true;
  }

  deleteAppnt() {
    this.appntService.deleteAppnt(this.idForDeletion);
    this.displayConfirmDelete = false;
  }
}
