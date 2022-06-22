import { Appointment } from './../../model/appointment';
import { AppntService } from './../../services/appnt.service';
import { Component, OnInit } from '@angular/core';
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
  appnts: Observable<Appointment[]>;
  descriptionForDeletion = '';
  displayAppntForm = false;
  displayConfirmDelete = false;
  formButtonText = 'Añadir cita';
  idForDeletion = '';
  patientsItem: SelectItem[] = [];

  appntForm = new FormGroup({
    appntId: new FormControl(),
    date: new FormControl(''),
    pName: new FormControl(''),
  });

  constructor(
    public appntService: AppntService,
    public patientService: PatientService
  ) {
    this.appnts = this.appntService.getAppnts();
    this.patientService.getPatients().subscribe((data) => {
      this.patientsItem = data.map((p) => {
        return { label: p.pName + '' + p.pLastN, value: p.patientId };
      });
    });
  }

  ngOnInit() {}

  addAppnt() {
    this.formButtonText = 'Añadir cita';
    this.appntService.addAppnt(this.appntForm.value);
    this.appntForm.reset();
  }

  editForm(id: string) {
    this.displayAppntForm = true;
    this.formButtonText = 'Actualizar cita';
    this.appntService.getAppnt(id).subscribe((data) => {
      this.appntForm.patchValue(data);
    });
    this.appntForm.reset();
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
    this.descriptionForDeletion = appnt.pName;
    this.displayConfirmDelete = true;
  }

  deleteAppnt() {
    this.appntService.deleteAppnt(this.idForDeletion);
    this.displayConfirmDelete = false;
  }
}
