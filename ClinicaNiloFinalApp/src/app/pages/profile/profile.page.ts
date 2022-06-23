import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './../../model/patient';
import { PatientService } from './../../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  patient: Patient;

  constructor(
    public auth: AuthService,
    public patientService: PatientService,
    private router: Router
  ) {}

  ngOnInit() {}

  /* async resetPassword() {
    await this.auth.resetPassword(this.patient.pEmail);
  } */

  /* async deleteAcount() {
    await this.auth.deleteAcount(this.patient.pEmail);
  } */
}
