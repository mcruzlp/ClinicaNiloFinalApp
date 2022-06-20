import { PatientsPipe } from './../../pipes/patients.pipe';
import { AppntService } from './../../services/appnt.service';
import { Appointment } from './../../model/appointment';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appnts',
  templateUrl: './appnts.page.html',
  styleUrls: ['./appnts.page.scss'],
})
export class AppntsPage implements OnInit {
  appnts: Observable<Appointment[]>;

  constructor(public appntService: AppntService, private router: Router) {
    this.appnts = this.appntService.getAppnts();
  }

  ngOnInit() {}

  addAppnt() {
    this.router.navigateByUrl('/create-appntform');
  }

  goEditItem(id: string) {
    this.router.navigateByUrl(`edit-appntform/${id}`);
  }
}
