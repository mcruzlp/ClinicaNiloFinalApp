import { Observable } from 'rxjs';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from './../model/patient';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patients',
})
export class PatientsPipe implements PipeTransform {
  patient: Patient;

  constructor(public patientService: PatientService) {}

  async transform(id: string): Promise<string> {
    let patientName: string = '';
    let patientLastName: string = '';

    await this.patientService
      .getPatient(id)
      .subscribe((patient) => (this.patient.patientId = id));

    if (this.patient == null) {
      patientName = '';
      patientLastName = '';
    } else {
      patientName = this.patient.pName;
      patientLastName = this.patient.pLastN;
    }

    return patientName + ' ' + patientLastName;
  }
}
