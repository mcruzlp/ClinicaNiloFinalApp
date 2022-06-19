import { Doctor } from './../model/doctor';
import { firstValueFrom, Observable } from 'rxjs';
import { DoctorService } from './../services/doctor.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doctors',
})
export class DoctorsPipe implements PipeTransform {
  constructor(public doctorService: DoctorService) {}

  async transform(doctorId: string): Promise<string> {
    let currentDoctor: Doctor = {
      doctorId: '',
      dName: '',
      dLastN: '',
      dGraduate: '',
      dTlfn: '',
      dEmail: '',
    };

    /* currentDoctor = await firstValueFrom(this.doctorService.userDoctor); */

    let userDoctorId = currentDoctor.doctorId;

    return userDoctorId;
  }
}
