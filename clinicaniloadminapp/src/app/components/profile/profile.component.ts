import { Component, OnInit } from '@angular/core';
import { Doctor } from './../../model/doctor';
import { DoctorService } from './../../services/doctor.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentDoctorId: string = '';

  doctor: Doctor = {
    doctorId: '',
    dName: '',
    dLastN: '',
    dGraduate: '',
    dTlfn: '',
    dEmail: '',
  };

  doctorForm = new FormGroup({
    doctorId: new FormControl(),
    dName: new FormControl(''),
    dLastN: new FormControl(''),
    dGraduate: new FormControl(''),
    dTlfn: new FormControl(''),
    dEmail: new FormControl(''),
  });

  doctors: Observable<Doctor[]>;

  constructor(public doctorService: DoctorService, private router: Router) {
    this.doctors = this.doctorService.getDoctors();
  }

  ngOnInit() {
    /* this.doctorService.userDoctor.subscribe((data) => {
      this.doctorForm.patchValue(data);
    }); */
  }

  updateDoctor() {
    this.doctorService.updateDoctor(this.doctorForm.value);
  }

  formSubmit() {
    this.updateDoctor();
    this.router.navigateByUrl('/appnts');
  }
}
