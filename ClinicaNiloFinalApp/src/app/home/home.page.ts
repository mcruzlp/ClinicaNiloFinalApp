import { Appointment } from './../model/appointment';
import { AppntService } from './../services/appnt.service';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  appointments: Observable<Appointment[]>;

  constructor(
    private appntService: AppntService,
    private menu: MenuController
  ) {
    this.appointments = this.appntService.getAppointments();
  }

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  addAppointment() {
    const appointment = {
      date: '02/07/2022',
      hour: '17:00',
    };

    this.appntService.addAppointment(appointment);
  }

  myAppntmts() {}

  goHome() {}

  messages() {}
}
