import { Observable } from 'rxjs';
import { Patient } from './../../model/patient';
import { PatientService } from 'src/app/services/patient.service';
import { AppntService } from './../../services/appnt.service';
import { Appointment } from './../../model/appointment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appntform',
  templateUrl: './appntform.page.html',
  styleUrls: ['./appntform.page.scss'],
})
export class AppntformPage implements OnInit {
  appnt: Appointment = { appntId: '', date: '', pName: '' };
  pageTitle: string = 'Nueva cita';
  action: string = 'create';
  id: string = '';
  patients: Observable<Patient[]>;

  constructor(
    public appntService: AppntService,
    private router: Router,
    public patientService: PatientService,
    private activatedRoute: ActivatedRoute
  ) {
    this.patients = this.patientService.getPatients();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id != null) {
      // edit mode
      this.pageTitle = 'Editar cita';
      this.action = 'edit';
      this.appntService
        .getAppnt(this.id)
        .subscribe((data) => (this.appnt = data));
    }
  }

  saveAppnt() {
    if (this.action === 'create') {
      this.appntService.addAppnt(this.appnt);
    } else {
      this.appntService.updateAppnt(this.appnt);
    }
    this.router.navigateByUrl('/appnts');
  }
}
