import { Appointment } from './../../model/appointment';
import { AppntService } from './../../services/appnt.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from './../../model/doctor';
import { DoctorService } from './../../services/doctor.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appnt-form',
  templateUrl: './appnt-form.page.html',
  styleUrls: ['./appnt-form.page.scss'],
})
export class AppntFormPage implements OnInit {
  title = 'Cita';

  appointments: Observable<Appointment[]> = this.appntService.getAppnts();
  appointment: Observable<Appointment> = this.appntService.getAppnt(id);

  doctors: Observable<Doctor[]> = this.doctorService.getDoctors();

  constructor(
    public appntService: AppntService,
    public doctorService: DoctorService,
    private router: Router
  ) {}

  ngOnInit() {}

  updateAppnt() {
    this.appntService.updateAppnt(this.appointment.appntId);
    this.router.navigateByUrl('/home');
  }
}
