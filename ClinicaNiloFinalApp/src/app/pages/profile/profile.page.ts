import { Component, OnInit } from '@angular/core';
import { Patient } from './../../model/patient';
import { PatientService } from './../../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  title = 'Mi perfil';

  patient: Patient;

  constructor(public patientService: PatientService, private router: Router) {}

  ngOnInit() {}
}
