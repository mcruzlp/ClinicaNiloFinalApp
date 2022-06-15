import { firstValueFrom, Observable } from 'rxjs';
import { Patient } from './../model/patient';
import { Pipe, PipeTransform } from '@angular/core';
import { PatientService } from './../services/patient.service';

@Pipe({
  name: 'patients',
})
export class PatientsPipe implements PipeTransform {
  constructor(public patientService: PatientService) {}

  async transform(patientId: string): Promise<string> {
    let patient: Patient = {
      patientId: '',
      pName: '',
      pLastN: '',
      pDNI: '',
      pBDate: '',
      pTlfn: '',
      pAddr: '',
      pEmail: '',
    };
    let patientName: string = '';
    let patientLastName: string = '';

    patient = await firstValueFrom(this.patientService.getPatient(patientId));

    if (patient == null) {
      patientName = '';
      patientLastName = '';
    } else {
      patientName = patient.pName;
      patientLastName = patient.pLastN;
    }

    return patientName + ' ' + patientLastName;
  }
}
