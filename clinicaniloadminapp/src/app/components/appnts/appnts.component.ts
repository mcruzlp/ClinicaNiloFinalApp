import { Appointment } from './../../model/appointment';
import { AppntService } from './../../services/appnt.service';
import { AuthService } from 'src/app/services/auth.service';
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
  appnts: Observable<Appointment[]>;
  patientsItem: SelectItem[] = [];

  appntForm = new FormGroup({
    patientId: new FormControl(''),
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
    this.descriptionForDeletion = appnt.patientId;
    this.displayConfirmDelete = true;
  }

  deleteAppnt() {
    this.appntService.deleteAppnt(this.idForDeletion);
    this.displayConfirmDelete = false;
  }
}
