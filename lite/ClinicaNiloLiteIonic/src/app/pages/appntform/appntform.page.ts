import { AppntService } from './../../services/appnt.service';
import { Appointment } from './../../model/appointment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appntform',
  templateUrl: './appntform.page.html',
  styleUrls: ['./appntform.page.scss'],
})
export class AppntformPage implements OnInit {
  appnt: Appointment = { appntId: '', date: '', patientId: '' };
  pageTitle: string = 'Nuevo elemento';
  action: string = 'create';
  id: string = '';

  constructor(
    public appntService: AppntService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.pageTitle = 'Editar elemento';
      this.action = 'edit';
      this.appntService
        .getAppnt(this.id)
        .subscribe((data) => (this.appnt = data));
    }
  }

  addAppnt() {
    this.appntService.addAppnt(this.appnt);
    this.router.navigateByUrl('/appnts');
  }
}
