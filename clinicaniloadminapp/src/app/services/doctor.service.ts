
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
import { Doctor } from './../model/doctor';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  pathToDoctors = `doctors`;
  pathToDoctorUserId = `doctors/${this.auth.getCurrentUser()?.uid}`;

  constructor(public auth: AuthService, private firestore: Firestore) {}

  async addDoctor(doctor: Doctor) {
    try {
      const docRef = await addDoc(
        collection(this.firestore, this.pathToDoctors),
        doctor
      );
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

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

  getUserDoctorId(): Observable<Doctor> {
    return docData(doc(this.firestore, `${this.pathToDoctorUserId}`), {
      idField: 'doctorId',
    }) as Observable<Doctor>;
  };

  async deleteDoctor(id: string) {
    await deleteDoc(doc(this.firestore, `${this.pathToDoctors}/${id}`));
  }
  async updateDoctor(doctor: Doctor) {
    await setDoc(
      doc(this.firestore, `${this.pathToDoctors}/${doctor.doctorId}`),
      doctor
    );
  }
}
