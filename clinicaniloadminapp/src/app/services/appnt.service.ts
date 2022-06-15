import { Appointment } from './../model/appointment';
import { AuthService } from './auth.service';
import {
  collection,
  collectionData,
  Firestore,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  docData,
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppntService {
  constructor(private firestore: Firestore, public auth: AuthService) {}

  async addAppnt(appnt: Appointment) {
    try {
      const docRef = await addDoc(
        collection(this.firestore, `appointments`),
        appnt
      );
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  getAppnts(): Observable<Appointment[]> {
    return collectionData(collection(this.firestore, `appointments`), {
      idField: 'appntId',
    }) as Observable<Appointment[]>;
  }

  getAppnt(id: string): Observable<Appointment> {
    return docData(doc(this.firestore, `appointments/${id}`), {
      idField: 'appntId',
    }) as Observable<Appointment>;
  }

  /* getAppntsByDoctor(dName: string): Observable<Appointment[]> {
    return collectionData(collection(this.firestore, `appointments`), {
      idField: 'dName',
    }) as Observable<Appointment[]>;
  } */

  async updateAppnt(appnt: Appointment) {
    await setDoc(doc(this.firestore, `appointments/${appnt.appntId}`), appnt);
  }

  async deleteAppnt(id: string) {
    await deleteDoc(doc(this.firestore, `appointments/${id}`));
  }
}
