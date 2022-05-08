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

  async presentAlertConfirm(appointment: Appointment) {
    const alert = await this.alertController.create({
      header: 'Cancelar',
      message: '¿Estás seguro que quieres cancelar esta cita?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: yes');
          },
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.deleteAppointment(appointment.appntId);
            console.log('Confirm Ok');
          },
        },
      ],
    });

    await alert.present();
  }

  async deleteAppointment(id: string) {
    await deleteDoc(doc(this.firestore, `appointments/${id}`));
  }

  async updateAppointment(appointment: Appointment) {
    await setDoc(
      doc(this.firestore, `appointments/${appointment.appntId}`),
      appointment
    );
  }

  getAppointment(id: string): Observable<Appointment> {
    return docData(doc(this.firestore, `appointments/${id}`), {
      idField: 'appntId',
    }) as Observable<Appointment>;
  }
}
