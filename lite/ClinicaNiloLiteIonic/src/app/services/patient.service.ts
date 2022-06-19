import { AuthService } from './auth.service';
import {
  collection,
  collectionData,
  Firestore,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  docData,
  updateDoc,
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './../model/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  pathToPatients = `users/${this.authService.getCurrentUser().uid}/patients`;

  constructor(private firestore: Firestore, private authService: AuthService) {}

  async addPatient(patient: Patient) {
    try {
      const docRef = await addDoc(
        collection(this.firestore, this.pathToPatients),
        patient
      );
      await updateDoc(docRef, {
        patientId: docRef.id,
      });
      console.log('Document written with ID: ', docRef.id);
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
  async updatePatient(patient: Patient) {
    await setDoc(
      doc(this.firestore, `${this.pathToPatients}/${patient.patientId}`),
      patient
    );
  }
}
