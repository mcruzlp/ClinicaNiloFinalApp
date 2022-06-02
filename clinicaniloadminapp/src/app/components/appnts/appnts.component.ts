import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Appointment } from './../../model/appointment';
import { AppntService } from './../../services/appnt.service';

@Component({
  selector: 'app-appnts',
  templateUrl: './appnts.component.html',
  styleUrls: ['./appnts.component.scss'],
})
export class AppntsComponent implements OnInit {
  appnts: Observable<Appointment[]>;

  appntForm = new FormGroup({
    appntId: new FormControl(),
    dName: new FormControl(''),
    pName: new FormControl(''),
    pLastN: new FormControl(''),
    date: new FormControl(''),
    hour: new FormControl(''),
  });

  formButtonText = 'Añadir cita';
  displayAppntForm = false;
  displayConfirmDelete = false;
  idForDeletion = '';
  descriptionForDeletion = '';

  constructor(public appntService: AppntService) {
    this.appnts = this.appntService.getAppnts();
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
