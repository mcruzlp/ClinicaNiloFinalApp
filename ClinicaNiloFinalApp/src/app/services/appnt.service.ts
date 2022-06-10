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
  docData,
  setDoc,
  query,
  where,
} from '@angular/fire/firestore';
import { Doctor } from './../model/doctor';
import { DoctorService } from './doctor.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppntService {
  pathToAppnts = `appointments`;
  /* pathToAppnts = `appointments/${this.auth.getCurrentUser().uid}`; */
  /*pathToDoctorAppnts = `appointments/${this.appointment.appntId}`;*/

  constructor(
    private firestore: Firestore,
    private alertController: AlertController,
    public auth: AuthService,
    public doctorService: DoctorService
  ) {}

  async addAppnt(appointment: Appointment) {
    try {
      await addDoc(collection(this.firestore, this.pathToAppnts), appointment);
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

  /* getAppntsByDoctor(dName: string): Observable<Appointment[]> {
    return collectionData(collection(this.firestore, this.pathToDoctorAppnts), {
      idField: 'dName',
    }) as Observable<Appointment[]>;
  } */

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
