import { AlertController } from '@ionic/angular';
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
  pathToAppnts = `users/${this.auth.getCurrentUser().uid}/appointments`;

  constructor(
    private firestore: Firestore,
    private alertController: AlertController,
    public auth: AuthService
  ) {}

  async addAppnt(appointment: Appointment) {
    try {
      const docRef = await addDoc(
        collection(this.firestore, 'pathToAppnts'),
        appointment
      );
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  getAppnts(): Observable<Appointment[]> {
    return collectionData(collection(this.firestore, this.pathToAppnts), {
      idField: 'appntId',
    }) as Observable<Appointment[]>;
  }

  getAppnt(id: string): Observable<Appointment> {
    return docData(doc(this.firestore, `${this.pathToAppnts}/${id}`), {
      idField: 'appntId',
    }) as Observable<Appointment>;
  }

  async deleteAppnt(id: string) {
    await deleteDoc(doc(this.firestore, `${this.pathToAppnts}/${id}`));
  }
  async updateAppnt(appointment: Appointment) {
    await setDoc(
      doc(this.firestore, `${this.pathToAppnts}/${appointment.appntId}`),
      appointment
    );
  }
}
