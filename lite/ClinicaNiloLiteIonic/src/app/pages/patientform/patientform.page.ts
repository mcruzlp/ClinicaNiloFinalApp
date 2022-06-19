import { Component, OnInit } from '@angular/core';
import { PatientService } from './../../services/patient.service';
import { Patient } from './../../model/patient';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patientform',
  templateUrl: './patientform.page.html',
  styleUrls: ['./patientform.page.scss'],
})
export class PatientformPage implements OnInit {
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
  pageTitle: string = 'Nuevo elemento';
  action: string = 'create';
  id: string = '';

  constructor(
    public patientService: PatientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id != null) {
      // edit mode
      this.pageTitle = 'Editar elemento';
      this.action = 'edit';
      this.patientService
        .getPatient(this.id)
        .subscribe((data) => (this.patient = data));
    }
  }

  addPatient() {
    if (this.action === 'create') {
      this.patientService.addPatient(this.patient);
    } else {
      this.patientService.updatePatient(this.patient);
    }
    this.router.navigateByUrl('/patients');
  }
}
