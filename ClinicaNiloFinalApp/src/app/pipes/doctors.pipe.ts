import { Doctor } from './../model/doctor';
import { DoctorService } from './../services/doctor.service';
import { Observable } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doctors',
})
export class DoctorsPipe implements PipeTransform {
  doctor: Doctor;

  constructor(public doctorService: DoctorService) {}

  async transform(doctorId: string): Promise<string> {
    /* let doctor: Doctor = {
      dName: '',
      dLastN: '',
      dGraduate: '',
      dTlfn: '',
      dEmail: ''
    }; */

    let doctorName: string = '';
    let doctorLastN: string = '';

    if (this.doctor == null) {
      doctorName = '';
      doctorLastN = '';
    } else {
      doctorName = this.doctor.dName;
      doctorLastN = this.doctor.dLastN;
    }
    return doctorName + '' + doctorLastN;
  }
}
