import { Appointment } from './../../model/appointment';
import { AppntService } from './../../services/appnt.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appnt-form',
  templateUrl: './appnt-form.page.html',
  styleUrls: ['./appnt-form.page.scss'],
})
export class AppntFormPage implements OnInit {
  title = 'Cita';

  appointment: Appointment = { appntId: '', date: '', hour: '' };

  constructor(public appntService: AppntService, private router: Router) {}

  ngOnInit() {}

  addAppnt() {
    this.appntService.addAppnt(this.appointment);
    this.router.navigateByUrl('/home');
  }
}
