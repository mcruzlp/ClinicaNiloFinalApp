import { AlertController } from '@ionic/angular';
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
import { Doctor } from './../model/doctor';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  pathToDoctors = `doctors`;

  constructor(
    private alertController: AlertController,
    private firestore: Firestore
  ) {}

  getDoctors(): Observable<Doctor[]> {
    return collectionData(collection(this.firestore, this.pathToDoctors), {
      idField: 'doctorId',
    }) as Observable<Doctor[]>;
  }

  getDoctor(id: string): Observable<Doctor> {
    return docData(doc(this.firestore, `${this.pathToDoctors}/${id}`), {
      idField: 'doctorId',
    }) as Observable<Doctor>;
  }
}
