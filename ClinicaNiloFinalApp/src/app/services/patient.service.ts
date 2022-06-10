import { AlertController } from '@ionic/angular';
import { AuthService } from './auth.service';
import {
  collection,
  collectionData,
  Firestore,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  docData,
  query,
  where,
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map, filter, scan } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Patient } from './../model/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  pathToPatients = `patients`;
  pathToUserPatientId = `patients/${this.auth.getCurrentUser().uid}`;

  constructor(
    private alertController: AlertController,
    public auth: AuthService,
    private firestore: Firestore
  ) {}

  async addPatient(patient: Patient) {
    try {
      const docRef = await addDoc(
        collection(this.firestore, this.pathToPatients),
        patient
      );
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  getPatients(): Observable<Patient[]> {
    return collectionData(collection(this.firestore, this.pathToPatients), {
      idField: 'patientId',
    }) as Observable<Patient[]>;
  }

  getPatient(id: string): Observable<Patient> {
    return docData(doc(this.firestore, `${this.pathToPatients}/${id}`), {
      idField: 'patientId',
    }) as Observable<Patient>;
  }

  async deletePatient(id: string) {
    await deleteDoc(doc(this.firestore, `${this.pathToPatients}/${id}`));
  }
  /* async updatePatient(patient: Patient) {
    await setDoc(
      doc(this.firestore, `${this.pathToPatients}/${patient.patientId}`),
      patient
    );
  } */
}
