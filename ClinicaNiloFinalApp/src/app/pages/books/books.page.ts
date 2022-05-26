import { Appointment } from './../../model/appointment';
import { AppntService } from './../../services/appnt.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from './../../model/doctor';
import { DoctorService } from './../../services/doctor.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  title = 'Reservar cita';

  appointment: Appointment;
  /* appntsByDoctor: Observable<Appointment[]> =
    this.appntService.getAppntsByDoctor(); */

  doctors: Observable<Doctor[]> = this.doctorService.getDoctors();

  constructor(
    public appntService: AppntService,
    public doctorService: DoctorService,
    private router: Router
  ) {}

  ngOnInit() {}

  updateAppnt() {
    this.appntService.updateAppnt(this.appointment);
    this.router.navigateByUrl('/home');
  }
}
