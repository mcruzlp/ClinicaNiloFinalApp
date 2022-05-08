import { Appointment } from './../../model/appointment';
import { AppntService } from './../../services/appnt.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-appnt-list',
  templateUrl: './appnt-list.page.html',
  styleUrls: ['./appnt-list.page.scss'],
})
export class AppntListPage implements OnInit {
  title = 'Mis citas';

  appointments: Observable<Appointment[]>;

  constructor(
    public appntService: AppntService,
  ) {
    this.appointments = this.appntService.getAppointments();
  }

  ngOnInit() {}
}
