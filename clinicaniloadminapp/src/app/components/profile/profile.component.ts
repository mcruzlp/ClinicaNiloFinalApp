import { AuthService } from './../../services/auth.service';
import { Doctor } from './../../model/doctor';
import { DoctorService } from './../../services/doctor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  doctor: Doctor = {
    doctorId: '',
    dName: '',
    dLastN: '',
    dGraduate: '',
    dTlfn: '',
    dEmail: '',
  };

  constructor(
    public auth: AuthService,
    public doctorService: DoctorService,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
