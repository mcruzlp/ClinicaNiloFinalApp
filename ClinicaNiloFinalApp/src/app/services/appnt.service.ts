import { Appointment } from './../model/appointment';
import {
  Firestore,
  collectionData,
  addDoc,
  collection,
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppntService {
  constructor(private firestore: Firestore) {}

  public async addAppointment(appointment: Appointment) {
    await addDoc(collection(this.firestore, 'appointments'), appointment);
  }

  public getAppointments(): Observable<Appointment[]> {
    const collectionRef = collection(this.firestore, 'appointments');
    return collectionData(collection(this.firestore, 'appointments'), {
      idField: 'appntId',
    }) as Observable<Appointment[]>;
  }
}
