import { Patient } from './../model/patient';
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

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private firestore: Firestore, public auth: AuthService) {}

  async addPatient(patient: Patient) {
    try {
      const docRef = await addDoc(
        collection(this.firestore, `patients`),
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
    return collectionData(collection(this.firestore, `patients`), {
      idField: 'patientId',
    }) as Observable<Patient[]>;
  }

  getPatient(id: string): Observable<Patient> {
    return docData(doc(this.firestore, `patients/${id}`), {
      idField: 'patientId',
    }) as Observable<Patient>;
  }

  async updatePatient(patient: Patient) {
    await setDoc(doc(this.firestore, `patients/${patient.patientId}`), patient);
  }

  async deletePatient(id: string) {
    await deleteDoc(doc(this.firestore, `patients/${id}`));
  }
}
