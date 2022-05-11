import { AlertController } from '@ionic/angular';
import { Appointment } from './../model/appointment';
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
  constructor(
    private firestore: Firestore,
    private alertController: AlertController
  ) {}

  async addAppointment(appointment: Appointment) {
    try {
      const docRef = await addDoc(
        collection(this.firestore, 'appointments'),
        appointment
      );
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  public getAppointments(): Observable<Appointment[]> {
    return collectionData(collection(this.firestore, 'appointments'), {
      idField: 'appntId',
    }) as Observable<Appointment[]>;
  }

  getAppointment(id: string): Observable<Appointment> {
    return docData(doc(this.firestore, `appointments/${id}`), {
      idField: 'appntId',
    }) as Observable<Appointment>;
  }
}
