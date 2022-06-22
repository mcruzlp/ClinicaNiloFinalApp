import { firstValueFrom, Observable } from 'rxjs';
import { Patient } from './../model/patient';
import { Pipe, PipeTransform } from '@angular/core';
import { PatientService } from './../services/patient.service';

@Pipe({
  name: 'patients',
})
export class PatientsPipe implements PipeTransform {
  constructor(public patientService: PatientService) {}

  transform(patientId: string): Observable<string> {
    return this.patientService.getPatientName(patientId);
  }
}
