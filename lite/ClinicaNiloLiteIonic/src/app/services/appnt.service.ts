import { AuthService } from './auth.service';
import { Appointment } from './../model/appointment';
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
export class AppntService {
  pathToAppnts = `appointments`;

  constructor(private firestore: Firestore, private authService: AuthService) {}

  async addAppnt(appnt: Appointment) {
    try {
      const docRef = await addDoc(
        collection(this.firestore, this.pathToAppnts),
        appnt
      );
      await updateDoc(docRef, {
        appntId: docRef.id,
      });
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

  async updateAppnt(appnt: Appointment) {
    await setDoc(
      doc(this.firestore, `${this.pathToAppnts}/${appnt.appntId}`),
      appnt
    );
  }

  async deleteAppnt(id: string) {
    await deleteDoc(doc(this.firestore, `${this.pathToAppnts}/${id}`));
  }
}
