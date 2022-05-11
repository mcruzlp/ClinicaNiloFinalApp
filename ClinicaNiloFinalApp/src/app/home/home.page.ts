import { AlertController } from '@ionic/angular';
import { Appointment } from './../model/appointment';
import { AppntService } from './../services/appnt.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'Clínica Nilo';

  appointments: Observable<Appointment[]>;

  constructor(
    public appntService: AppntService,
    private alertController: AlertController,
    private router: Router
  ) {
    this.appointments = this.appntService.getAppointments();
  }

  addAppnt() {
    const appnt = {
      date: '14/03/2023',
      hour: '18:00',
    };
    this.appntService.addAppointment(appnt);
  }
}
