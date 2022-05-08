import { Appointment } from './../model/appointment';
import { AppntService } from './../services/appnt.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'Clínica Nilo';

  appointments: Observable<Appointment[]>;

  constructor(public appntService: AppntService) {
    this.appointments = this.appntService.getAppointments();
  }

  addItem() {
    const appnt = {
      date: '14/03/2023',
      hour: '18:00',
    };
    this.appntService.addAppointment(appnt);
  }

  myAppntmts() {}

  goHome() {}

  messages() {}
}
